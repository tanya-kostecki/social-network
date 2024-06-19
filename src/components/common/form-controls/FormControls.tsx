import React from 'react';
import styles from './FormControls.module.css'

type TextareaProps = {
    input: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    meta: {
        touched: boolean
        error?: string
    }
};

export const Textarea: React.FC<TextareaProps> = ({ input, meta }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <textarea {...input}/>
            {hasError && <span className={styles.errorSpan}>{meta.error}</span>}
        </div>
    );
};