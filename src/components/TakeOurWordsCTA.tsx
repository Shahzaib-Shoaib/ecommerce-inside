import React from 'react'
import Link from 'next/link'
import GetStartedForm from './Forms/GetStartedForm'

const TakeOurWordsCTA = () => {
  return (
    <section className="section relative py-5 xl:py-20 2xl:py-20">
        <div className="bg-purpule absolute -z-[1] top-0 left-0 h-0 w-full xl:h-[192px] 2xl:h-[192px]"></div>
        <div className="div_container">
            <div className="grid grid-cols-1 xl:grid-cols-5 2xl:grid-cols-5 xl:gap-14 2xl:gap-14">
                <div className="bg-black p-6 xl:p-16 2xl:p-16 col-span-2">
                    <div className="quote xl:absolute 2xl:absolute  top-0 bg-white xl:max-w-[280px] 2xl:max-w-[280px] shadow-md p-6 after:absolute after:top-full after:border-t-[25px] after:border-t-white after:border-l-transparent after:border-l-[25px] after:right-0">
                        <p className="text-black text-[18px] xl:text-[32px] 2xl:text-[32px] font-bold leading-[40px]">Take Our Word For It…</p>
                    </div>
                    <p className="text-purpule lg:text-[18px] xl:text-[18px] font-semibold mb-7 mt-3">…We Are Your Partners Through The Digital Era.</p>
                    <Link href={'tel:937-814-5702'} className='text-white text-[16px] font-semibold mb-4'>937-814-5702</Link><br />
                    <Link href={'mailto:instantdesignstudio.com'} className='text-white text-[16px] font-semibold mb-3'>instantdesignstudio.com</Link>
                </div>

                <div className="form col-span-3">
                    <h3 className="xl:text-white 2xl:text-white text-[30px] 2xl:text-[35px] font-bold mb-2 mt-8 xl:mt-0 2xl:mt-0">Let’s get started!</h3>
                    <p className="xl:text-white 2xl:text-white font-normal mt-5 xl:mb-16 2xl:mb-16">Drive your business forward and get in touch today.</p>
                    <GetStartedForm darkmode={true}/>
                </div>
            </div>

        </div>
    </section>
  )
}

export default TakeOurWordsCTA