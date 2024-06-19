import React from 'react';
import styles from './FormControls.module.css'
import {WrappedFieldProps} from "redux-form";

type TextareaProps = {
    input: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    meta: {
        touched: boolean
        error?: string
    }
};

export const Textarea = ({ input, meta }: TextareaProps) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <textarea {...input}/>
            {hasError && <span className={styles.errorSpan}>{meta.error}</span>}
        </div>
    );
};

type InputProps = WrappedFieldProps & {
    input: React.InputHTMLAttributes<HTMLInputElement>;
    meta: {
        touched: boolean
        error?: string
    }
};

export const Input = ({ input, meta }: InputProps) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <input {...input}/>
            {hasError && <span className={styles.errorSpan}>{meta.error}</span>}
        </div>
    );
};