import React from 'react';
import styles from './FormControls.module.css'
import {WrappedFieldProps} from "redux-form";

type FormControlProps = {
    children: React.ReactNode
    meta: {
        touched: boolean
        error?: string
    }
}
const FormControl = ({ children, meta}: FormControlProps) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {children}
            {hasError && <span className={styles.errorSpan}>{meta.error}</span>}
        </div>
    );
}

type TextareaProps = WrappedFieldProps & {
    input: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    meta: {
        touched: boolean
        error?: string
    }
};

type InputProps = WrappedFieldProps & {
    input: React.InputHTMLAttributes<HTMLInputElement>;
    meta: {
        touched: boolean
        error?: string
    }
};

export const Textarea = (props: TextareaProps) => {
    const { input, meta, ...restProps } = props;
    return <FormControl meta={meta}><textarea {...input} {...restProps}/></FormControl>
};

export const Input = (props: InputProps) => {
    const { input, meta, ...restProps } = props;
    return <FormControl meta={meta}><input {...input} {...restProps}/></FormControl>
};