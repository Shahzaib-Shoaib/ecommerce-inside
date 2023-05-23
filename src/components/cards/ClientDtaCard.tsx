import React from 'react'

const ClientDtaCard = ({ data }:any) => {
    return (
        <div  className={` bg-cover bg-no-repeat items-center bg-center relative flex flex-col   justify-center border group`}>
        <img src={data.bgIMG} alt="" className='object-cover'/>
        <img src={data.clientIMG} alt="" className='absolute  group-hover:scale-110 duration-150'/>
        </div>
    )
}

export default ClientDtaCard