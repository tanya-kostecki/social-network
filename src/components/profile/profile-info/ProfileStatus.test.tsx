import React from 'react';
import { create } from 'react-test-renderer';
import { ProfileStatus } from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'Hello'} updateProfileStatus={() => {}} />);
        const instance = component.getInstance() as unknown  as ProfileStatus;

        if (instance) {
            expect(instance.state.status).toBe('Hello');
        } else {
            throw new Error('Instance is null');
        }
    });

    test('after creation <span> should be displayed with correct status', () => {
        const component = create(<ProfileStatus status={'Hello'} updateProfileStatus={() => {}} />);
        const root = component.root
        if (root) {
            const span = root.findByType('span')
            expect(span.children.length).toBe(1)
            expect(span.children[0]).toBe('Hello')
        }
    });

    test('after creation <input> should not be displayed', () => {
        const component = create(<ProfileStatus status={'Hello'} updateProfileStatus={() => {}} />);
        const root = component.root;
        expect(() => {
            root.findByType('input');
        }).toThrow();
    });

    test('<input> should be displayed in editMode instead of <span>', () => {
        const component = create(<ProfileStatus status={'Hello'} updateProfileStatus={() => {}} />);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('Hello');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'Hello'} updateProfileStatus={mockCallback} />);
        const instance = component.getInstance() as unknown as ProfileStatus;

        if (instance) {
            instance.deactivateEditMode();
            expect(mockCallback.mock.calls.length).toBe(1);
        } else {
            throw new Error('Instance is null');
        }
    });
});