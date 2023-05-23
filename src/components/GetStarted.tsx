import React, { FC } from "react";
import CollisionButton from "./ui/CollisionButton";

const GetStarted: FC = () => {
  return (
    <section className=" flex items-center bg-[url('/footer-form-bg.webp')]  3xl:h-[860px] py-[30px] lg:-[60px] overflow-hidden">
      <div className="container mx-auto px-[10px]">
        <div className="row flex flex-col lg:flex-row gap-8">
          <div className="getStartedLeft hidden lg:block relative lg:max-w-[50%]">
            


            <div className="getstarted-left-circle relative -left-[30]">
                <img src="/footer-left-circle.webp" alt="Footer Left Circle" />
            </div>
            <div className="getstarted-left-laptop -top-[50px] -right-[40px] absolute">
                <img src="/footer-left-laptop.webp" alt="Footer Left Laptop" />
            </div>
            <div className="getstarted-left-img top-[160px] w-[73%] -left-[20px] absolute">
                <img src="/footer-left-img.webp" alt="Footer IMG" />
            </div>
            <div className="getstarted-left-tree top-0 -left-[20px] absolute">
                <img src="/footer-left-tree.webp" alt="Footer Left Tree" />
            </div>
            <div className="getstarted-left-watch -top-[30px] left-[30%] absolute">
                <img src="/footer-left-watch.webp" alt="Footer Left Watch" />
            </div>



          </div>
          <div className="getStartedRight relative  lg:max-w-[50%]">
            <h3 className="GetStartedHeading text-[30px] font-bold text-white lg:text-[40px] 3xl:text-[50px] before:hidden lg:before:block  lg:before:bg-[url('/footer-right-circle.webp')]  bg-no-repeat before:animate-circle-spin before:w-[794px] before:h-[806px] before:-top-[140px] before:-right-[250] before:absolute ">
              Let's Get Started! 
            </h3>
            <p className="md:text[16] pb-[26px] pt-[10px] text-[14px] text-[#b4a5d6] md:pb-[36px] md:pt-[15px] lg:text-[20px]">
              We’ve got budget-friendly solutions and flexible design packages
              that meet your needs.
            </p>
            <div className="getStarted-form absolute z-[9999999]">
              <form id="Get Started">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" className="form-control input-lg w-full " placeholder="Enter Your Name" size={50}/>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-control input-lg w-full " placeholder="Enter Your Email Address" size={50}/>
                </div>
                <div className="form-group">
                  <label>Phone No</label>
                  <input type="tel" className="form-control input-lg w-full " placeholder="Enter Your Phone Number" size={50} />
                </div>
                {/* <input type="submit"  value={"Let's Get Started"}/> */}
                <div className="mt-[20px]">

                <CollisionButton variant="Dark" className="">Let's Get Started</CollisionButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="relative flex items-center bg-[url('/footer-form-bg.webp')]  3xl:h-[860px] py-[30px] lg:-[60px] overflow-hidden">
    //   <div className="container mx-auto px-[10px]">
    //     <div className="row flex flex-col lg:flex-row gap-8">
    //       <div className="getStartedLeft hidden lg:block relative lg:max-w-[50%]">
            


    //         <div className="getstarted-left-circle relative -left-[30]">
    //             <img src="/footer-left-circle.webp" alt="Footer Left Circle" />
    //         </div>
    //         <div className="getstarted-left-laptop -top-[50px] -right-[40px] absolute">
    //             <img src="/footer-left-laptop.webp" alt="Footer Left Laptop" />
    //         </div>
    //         <div className="getstarted-left-img top-[160px] w-[73%] -left-[20px] absolute">
    //             <img src="/footer-left-img.webp" alt="Footer IMG" />
    //         </div>
    //         <div className="getstarted-left-tree top-0 -left-[20px] absolute">
    //             <img src="/footer-left-tree.webp" alt="Footer Left Tree" />
    //         </div>
    //         <div className="getstarted-left-watch -top-[30px] left-[30%] absolute">
    //             <img src="/footer-left-watch.webp" alt="Footer Left Watch" />
    //         </div>



    //       </div>
    //       <div className="getStartedRight  !z-[999999] lg:max-w-[50%]">
    //         <h3 className="GetStartedHeading text-[30px] font-bold text-white lg:text-[40px] 3xl:text-[50px] after:hidden lg:after:block  lg:after:bg-[url('/footer-right-circle.webp')] after:w-[794px] after:h-[806px] after:-top-[10px] after:right-[250px] after:z-[999] after:absolute bg-no-repeat after:animate-circle-spin ">
    //           Let's Get Started!
    //         </h3>
    //         <p className="md:text[16] pb-[26px] pt-[10px] text-[14px] text-[#b4a5d6] md:pb-[36px] md:pt-[15px] lg:text-[20px]">
    //           We’ve got budget-friendly solutions and flexible design packages
    //           that meet your needs.
    //         </p>
    //         <div className="getStarted-form">
    //           <form id="Get Started">
    //             <div className="form-group">
    //               <label>Your Name</label>
    //               <input type="text" className="form-control input-lg w-full " placeholder="Enter Your Name" size={50}/>
    //             </div>
    //             <div className="form-group">
    //               <label>Email Address</label>
    //               <input type="email" className="form-control input-lg w-full " placeholder="Enter Your Email Address" size={50}/>
    //             </div>
    //             <div className="form-group">
    //               <label>Phone No</label>
    //               <input type="tel" className="form-control input-lg w-full " placeholder="Enter Your Phone Number" size={50} />
    //             </div>
    //             <input type="submit"  value={"Let's Get Started"}/>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default GetStarted;
