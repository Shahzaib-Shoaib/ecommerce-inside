import React, { FC } from 'react'

type FormTextFieldType = {
    placeholder:string,
    className:string,
}

const FormTextField:FC<FormTextFieldType> = ({placeholder,className}) => {
  return (
    <div className={`flex w-full items-center border-b  border-[#ccc]  my-4 ${className}`}>
      <input
        className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none placeholder-black"
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormTextField