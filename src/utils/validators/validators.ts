export const required = (value: string) => {
    if (value) return undefined
    return 'Field is required'
}

export const validateMaxLength = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) return `Value cannot be longer than ${maxLength}`
    return undefined
}