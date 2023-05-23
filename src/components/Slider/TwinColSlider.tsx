import React, { useEffect, useState } from 'react'
import TwinColSliderData from '~/data/TwinColSliderData';
import Button from '../ui/Button';

const TwinColSlider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [show, setShow] = useState(true);

    const handleClick = (direction: String) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : (TwinColSliderData.length - 1));
        } else {
            setSlideIndex(slideIndex < (TwinColSliderData.length - 1) ? slideIndex + 1 : 0);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlideIndex((i) => (i + 1) % TwinColSliderData.length);
            setShow(true);

        }, 4000);

        return () => {
            clearInterval(intervalId);
        }

    }, []);

    return (
        // <div className='w-full h-[85vh] bg-white flex relative overflow-hidden'>
        //     {/* Arrow Left */}
        //     <div className="w-[50-px] h-[50px] bg-white rounded-xl flex items-center justify-center asolute top-0 bottom-0 m-auto cursor-pointer opacity-[0.5] z-[2] "  onClick={() => handleClick("left")}>
        //         <AiFillCaretLeft />
        //     </div>

        //     <div className="h-full flex transition-all duration-[1.5s] "></div>
        //     {/* Arrow Right */}
        //     <div className="w-[50-px] h-[50px] bg-white rounded-xl flex items-center justify-center asolute top-0 bottom-0 m-auto cursor-pointer opacity-[0.5] z-[2] "  onClick={() => handleClick("right")}>
        //         <AiFillCaretRight />
        //     </div>
        // </div>

        <div id="controls-carousel" className="relative w-full p-2" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {
                    TwinColSliderData.map((slide) => (
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <div className="slide-wrapper flex flex-col md:flex-row w-full -translate-x-[100%] -translate-y-0 top-1/2 left-1/2">
                                <div className="data-col w-1/2">
                                    <h3 className="text-h3 font-bold ">PROJECT</h3>
                                    <h4 className="text-h4 ">{slide.projectType}</h4>
                                    <h2 className="text-h2 font-extrabold">{slide.projectName}</h2>
                                    <p className="text-p">{slide.projectDesc}</p>
                                    <Button variant='Green' className="cursor-pointer">Case Study</Button>
                                </div>
                                <div className="img-col w-1/2">
                                    <img src={slide.image} className="block  " alt="..." />
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-800/30 group-hover:bg-gray-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-6 h-6 text-black dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-800/30 group-hover:bg-gray-500 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-6 h-6 text-black dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div >

    )
}

export default TwinColSlider