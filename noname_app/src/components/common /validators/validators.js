export const required =value=>{
    if (!value || value === ' ') {
        return 'This field is required'
    }
    return undefined
}

export const maxLength =(maxLength) =>(value)=>{
    if (value.length > maxLength ) {
        return `Max post's length is ${maxLength} symbols!`;
    }
}
