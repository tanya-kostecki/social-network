import React, {InputHTMLAttributes, TextareaHTMLAttributes} from 'react';
import styles from './FormControls.module.css'
import {WrappedFieldProps} from "redux-form";

type MetaProps = {
    meta: {
        touched: boolean
        error?: string
    }
}
type FormControlProps = {
    children: React.ReactNode
} & MetaProps

const FormControl = ({children, meta}: FormControlProps) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {children}
            {hasError && <span className={styles.errorSpan}>{meta.error}</span>}
        </div>
    );
}

type FieldProps<T> = WrappedFieldProps & {
    input: T
} & MetaProps

export const Textarea = (props: FieldProps<TextareaHTMLAttributes<HTMLTextAreaElement>>) => {
    const {input, meta, ...restProps} = props;
    return <FormControl meta={meta}><textarea {...input} {...restProps}/></FormControl>

};

export const Input = (props: FieldProps<InputHTMLAttributes<HTMLInputElement>>) => {
    const {input, meta, ...restProps} = props;
    return <FormControl meta={meta}><input {...input} {...restProps}/></FormControl>
};