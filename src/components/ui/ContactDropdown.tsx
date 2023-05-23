import React from 'react'

const ContactDropdown = ({ariaLable,className,options}) => {
  return (
    <div className={`flex w-full items-center border-b  border-[#ccc]  my-4 ${className}`}>
      <select
        className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight focus:ring-0 text-gray-700 focus:outline-none cursor-pointer placeholder-black"
        aria-label={ariaLable}
      >
        {
            options.map((item)=>(
                <option value={item.name} key={item.id}>{item.name}</option>
            ))
        }
      </select>
    </div>
  )
}

export default ContactDropdown