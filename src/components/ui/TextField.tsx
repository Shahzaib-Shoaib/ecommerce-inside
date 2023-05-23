import React from "react";

interface TextFieldProps {
    id?:string,
    fieldName?:string,
    type:string,
    label:string,
    onChange?:Event,
    placehlder?:string,
    required?:string,
    value?:string,
    className:string
    children:string
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({type, className, children, ...props}, ref) => {
    return (
      <input
        type={type}
        className={className}
      />
    );
  })

  TextField.displayName = 'TextField'

export default TextField;
