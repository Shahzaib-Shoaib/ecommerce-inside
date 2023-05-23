import { NextPage } from 'next'
import React from 'react'
import Banner from '~/components/Banner'
import CopyRightBar from '~/components/CopyRightBar'
import Expertise from '~/components/Expertise'
import Footer from '~/components/Footer'
import GetStarted from '~/components/GetStarted'
import Header from '~/components/Header/Header'
import InfoSec from '~/components/InfoSec'
import MainHeading from '~/components/MainHeading'
import MyModal from '~/components/MyModal'
import ServicesContact from '~/components/ServicesContact'
import ServicesSlider from '~/components/Slider/ServicesSlider'
import Testimonials from '~/components/Testimonials'

const animation:NextPage = () => {
    const infoSecData = [
        {
            title:"Exceptional Service",
            desc:"We make sure our clients get the best and nothing less.",
            img: "inner-about-choose-icon-1.webp",
        },
        {
            title:"Experienced Teams",
            desc:"Our experienced & dedicated teams are our best find and pride.",
            img: "inner-about-choose-icon-2.webp",
        },
        {
            title:"Economical Packages",
            desc:"Premium quality deliverables at the most affordable prices.",
            img: "inner-about-choose-icon-3.webp",
        },
        {
            title:"24/7 Support",
            desc:"Our team is always available round the clock at your service.",
            img: "inner-about-choose-icon-4.webp",
        },
        {
            title:"Performance History",
            desc:"Our proven track of success stories speaks for itself.",
            img: "inner-about-choose-icon-5.webp",
        },
        {
            title:"Time Effective",
            desc:"We set realistic deadlines for your project and deliver it before time.",
            img: "inner-about-choose-icon-6.webp",
        },
    ]
      const sliderData = [
        {
          subHeading: "Reach Out To Mass Audience",
          Heading: "Enviable Search Engine Marketing Agency, USA",
          desc: "Search Engine Optimization, commonly known as SEO, has changed the dynamics of driving organic traffic to your brand upside down. The right optimization of content on your website can change the game, be it copywriting, blogs, or anything. Search engine optimization not just drives the traffic but also improves brand’s digital visibility on all major search engines like Google, Bing and more. Teams at Ecommerce Inside with decades of industry experience can develop strategies that work for your brand like magic, therefore hire our team today or get free consultation.",
          options: [
            "On-Page SEO",
            "Copywriting",
            "Website Auditing",
            "Link Building and more",
          ],
          img: "/digitalnarketibg_1.webp",
        },
        {
          subHeading: "Reach Out To Mass Audience",
          Heading: "Pay Per Click (Google Ads)",
          desc: "Capturing the right target audience’s eye is art, and we are a team of artists. Pay per Click or commonly known as PPC is one of the foolproof ways to improve the overall performance of your brand. We plan, create strategies and execute them in a way that produces all your desired results. Get free consultation or speak to our expert, we are available;be at your service round the clock.",
          options: [
            "Planning & Management ",
            "Ads and Campaign Building",
            "Bid & Budget Management",
            "Recommendations & Reporting",
          ],
          img: "/digitalnarketibg_2.webp",
        },
        {
          subHeading: "Reach Out To Mass Audience",
          Heading: "Social Media Marketing Services in USA",
          desc: "Speak to our social media marketers today and get free consultation of your project. We develop strategies that work best for your brand, improve its digital presence, enhance user engagement, drive organic traffic and most importantly make a significant impact on a brand's ROI. We do not just make strategies, we build brands. ",
          options: [
            "Social Media Consultation",
            "Social Media Consultation",
            "Brand Building",
            "Running Different Campaigns",
          ],
          img: "/digitalnarketibg_3.webp",
        },
        {
          subHeading: "Reach Out To Mass Audience",
          Heading: "Astounding Explainer Videos",
          desc: "Explainer videos are everywhere. They serve as the best medium to convey a brand's message to their target audiences in the most effective and efficient way. Ecommerce Inside (Pvt) Ltd has been providing explainer videos service in USA and across the globe for years now. Our explainers videos are popular because of the evident hike in user engagement as well as ROI. If you are also looking for an explainer video for your brand, get in touch with our experts and also avail free consultation on your project.",
          options: [
            "Innovative Designs & Creative Approach ",
            "Improved Organic Traffic",
            "Corporate Explainer Videos",
            "Enhanced User Engagement",
          ],
          img: "/digitalnarketibg_4.webp",
        },
      ];
  return (
    <>
    <Header />
      <Banner
      smallHeading={"Edge Cutting Branding Design"}
        mainHeading={"Services the Best Branding Agency in USA is a Tap Away!"}
        bgImg={"/animation-banner.webp"}
        img={"/animation-banner-right.webp"}
        desc={
          "We offer branding solutions that enhance organic traffic along with brand visibility on detail platforms in a blink of an eye."
        }
      />
      <ServicesContact />
      <section>
        <div className="container mx-auto p-[15px] py-[20px] md:py-[60px]">
          <MainHeading
            subHeading="Strategies that Make Your Brand Stand Out"
            mainHeading="Best Digital Marketing"
            spanHeading="Agency in UAE"
            desc="Ecommerce Inside has made into the list of “Best digital marketing company in USA” for all the right reasons which are professionalism, premium quality work and use of the latest strategies. We develop customized strategies that give wings to your brand."
          />
          <div className="slider mt-[30px]">
            <ServicesSlider sliderData={sliderData} />
          </div>
        </div>
      </section>
      <InfoSec
        infocardData={infoSecData}
        smallHeading={"We Are The Best Branding Agency USA"}
        mainHeading={"Redefine. Revolution. Robust"}
        desc={
          "Ecommerce Inside emphasizes on redefining the monotonous tech paradigms and works on bridging revolutionary robust and rigorous apps, solutions, and services that facilitates clients and customers at the most affordable prices."
        }
      />
        <Expertise />
        <GetStarted />
        <Testimonials />
        <Footer />
        <CopyRightBar />
        <MyModal />
    </>
  )
}

export default animation;