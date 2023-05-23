import React, { FC } from 'react'

interface TechLeafProps {
    leaf:object
}

const TechLeaf:FC<TechLeafProps> = ({leaf}) => {
  return (
    <div className="leaf px-[20px] hover:bg-caribbeangreen  px-[20px] h-[90px] bg-white shadow-leafShadow flex items-center justify-center text-center rounded-tl-[50px] rounded-br-[50px] hover:scale-110 duration-150 cursor-pointer hover:border-black hover:border-[1px] ">
        <img src={leaf.img} alt="tech-leaf" />
    </div>
  )
}

export default TechLeaf