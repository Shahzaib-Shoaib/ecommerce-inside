import React, { FC, useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Button from '../ui/Button';

const Slider: FC = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },

        {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    setTimeout(nextSlide, 5000);

    return (
        <div className='max-w-[1920px] h-screen w-full m-auto  relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex]?.url})` }}
                className='w-full h-full  bg-center bg-cover duration-500'
            >
                <div className=" text-darkblue">
                    <div className="bg-white rounded-lg p-5    top-8 left-0 bottom-0 md:max-w-[60%] lg:max-w-[40%] max-h-[60%] my-auto">
                        <div className="flex flex-col w-full justify-center items-start overflow-hidden">
                            <h1 className="text-h2 lg:text-h1 leading-[50px] mb-4">Best Digital Marketing Agency in USA</h1>
                            <p className="lg:text-p text-xs mb-[30px]">Ecommerce Inside is a leading digital marketing company in the UAE that is trusted by brands of all sizes and shapes. We help our clients to reach out to their target audience and make them stay for longer periods of time. We offer a free consultation to help you understand your needs and goals. We have a team of experts who will work together to develop a custom strategy for your company. Contact us today!</p>
                            <Button variant='Green'>Request Quote For Free</Button>
                        </div>

                    </div>
                </div>
            </div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex  justify-center py-2 gap-3  absolute bottom-0  z-3 left-0 right-0'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-md cursor-pointer bg-white rounded-full hover:text-caribbeangreen'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>

            {/* <div className=" text-darkblue">
              <div className="bg-white rounded-lg p-5   absolute top-8 left-0 bottom-0 md:max-w-[60%] lg:max-w-[40%] max-h-[60%] my-auto">
                    <div className="flex flex-col w-full justify-center items-start overflow-hidden">
                        <h1 className="text-h2 lg:text-h1 leading-[50px] mb-4">Best Digital Marketing Agency in USA</h1>
                        <p className="lg:text-p text-xs">Ecommerce Inside is a leading digital marketing company in the UAE that is trusted by brands of all sizes and shapes. We help our clients to reach out to their target audience and make them stay for longer periods of time. We offer a free consultation to help you understand your needs and goals. We have a team of experts who will work together to develop a custom strategy for your company. Contact us today!</p>
                        <Button variant='Green'>Request Quote For Free</Button>
                        <Button variant='Dark'>Request Quote For Free</Button>
                    </div>

                </div>
            </div> */}
        </div>
    )
}

export default Slider