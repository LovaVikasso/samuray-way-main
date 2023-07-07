export const requiredField = (value:any) => {
   if (value) return undefined; else return "Field is required"
}

export const maxLengthCreator = (maxLength:number) => (value:any) => {
   if (value && value.length > maxLength) return "Too mane symbols"; else return undefined
}