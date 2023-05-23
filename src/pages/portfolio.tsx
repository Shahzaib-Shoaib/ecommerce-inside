import React, { FC } from 'react'
import CopyRightBar from '~/components/CopyRightBar'
import Expertise from '~/components/Expertise'
import Footer from '~/components/Footer'
import GetStarted from '~/components/GetStarted'
import Header from '~/components/Header/Header'
import MyModal from '~/components/MyModal'
import PortfolioPackages from '~/components/Packages/PortfolioPackages'
import Testimonials from '~/components/Testimonials'

const portfolio:FC = () => {
  return (
    <>
    <Header />
    <section className="portfoli-banner bg-[url('/case-3-banner.webp')] bg-cover bg-no-repeat bg-center overflow-hidden pt-[125px] h-[470px] lg:h-[570px] lg:pt-[100px] xl:h-[655px]">
        <div className="container px-[15px] mx-auto">
            <div className="row flex items-center justify-between">
                <div className="portfolio-text text-white text-[18px] pb-[25px] leading-[23px] font-bold md:w-[50%]">
                    <h1 className="heading pt-[30px] pb-[15px] text-[20px] leading-[30px] md:text-[19px] md:pt-[60px] md:pb-[28px] md:leading-[23px]  lg:text-[32px] lg:pt-[106px] lg:pb-[38px] lg:leading-[1.2] xl:text-[30px] ">
                        Live Life Loud</h1>
                        <p className="portgolio-banner-desc font-normal text-white text-[17px] md:text-[14px] lg:text-[15px] xl:text-[21px]">Life should be lived at full volume. That means getting your friends together, turning up the music to full volume and dancing all night to a clear, rich sound. With our new ISi range of speakers, you can make the most of every single moment, power parties you’ll remember forever, and always live your life out loud.</p>
                </div> 
                <div className="portfolio-banner-img hidden md:flex items-center justify-end w-[50%]">
                    <img src="/case-3-banner-right.webp" alt="portfolio-banner-img" className='w-[80%]'/>
                </div>
            </div>
        </div>
    </section>

    <PortfolioPackages />
     <Expertise />

     <GetStarted />

      <Testimonials />

      <Footer /> 
      <CopyRightBar />

      <MyModal />
    
    </>
  )
}

export default portfolio