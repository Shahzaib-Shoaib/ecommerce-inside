import React, { FC } from 'react'
import Button from '../ui/Button'
import Link from 'next/link'
import useRQGlobalState from '~/utils/useRQGlobalState';
import Paragraph from '../ui/Paragraph';
import CollisionButton from '../ui/CollisionButton';

const PackageCard: FC = ({ info }) => {
    const [modalActive,setModalActive] = useRQGlobalState('modal',false);
    return (

        <div className="package-box border-darkblue border-2 rounded-lg p-[35px] group hover:bg-darkblue duration-300 flex flex-col" >
            <div className="title mb-[15px]">

            <h5 className='text-black text-h5 group-hover:text-white font-medium'>{info.name}</h5>
            <div className='flex gap-2'>
                <h6 className="text-gray-400 line-through group-hover:text-caribbeangreen font-medium">{info.price}</h6>
                <h6 className="text-gray-400 group-hover:text-caribbeangreen font-medium">ONLY</h6>
            </div>
            <h3 className="text-caribbeangreen text-[42px]  group-hover:text-white font-extrabold">{info.discprice}</h3>
            <p className='text-[12] group-hover:text-white font-medium'>{info.desc}</p>
            </div>

            <div className='h-[150px] overflow-y-auto mb-5'>
                <ul>
                    {
                        info.points.map((point) => (
                            <li className=' text-[12px] group-hover:text-white mb-[5px] ' key={point}>{point}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex items-center justify-center">

            <CollisionButton variant='Green' className='mx-auto' onClick={()=>setModalActive(true)}>Order Now</CollisionButton>
            </div>
            <div className='flex flex-col items-center justify-center gap-1 pt-[20px]'>
                <p className='text-xs text-caribbeangreen group-hover:text-white'>Share your idea?</p>
                <Link href={"tel:+17343614340"} className='text-p font-bold group-hover:text-white'>+1 (734) 361 4340</Link>
            </div>
        </div >
    )
}

export default PackageCard