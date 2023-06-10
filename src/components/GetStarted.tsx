"use client";
import React, { FC } from "react";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";
import ErrorAlert from "./ui/ErrorAlert";
import Image from "next/image";

type FormData = {
  name: string;
  email: string;
  phone: number;
};


const GetStarted: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onContact = (data:FormData) => {
    console.log(data)
  }

  return (
    <section className="flex  items-center justify-center overflow-hidden bg-[url('/images/footer-form-bg.webp')] bg-cover bg-center bg-no-repeat py-[100px] 3xl:h-[100vh] 4xl:h-[100vh] 5xl:h-[100vh] 6xl:h-[100vh]">
      <div className="div_container">
        <div className="row grid grid-cols-1 gap-8 3xl:grid-cols-2 4xl:grid-cols-2 5xl:grid-cols-2 6xl:grid-cols-2">
          <div className="left relative m-auto hidden h-[500px] w-[500px] items-center justify-center 3xl:block 4xl:block 5xl:block 6xl:block">
            <div className="getstarted-left-circle relative m-auto">
              <Image width={682} height={681}
                src="/images/footer-left-circle.webp"
                alt="Footer Left Circle"
              />
            </div>
            <div className="getstarted-left-laptop absolute -right-[10%] -top-[8%]">
              <Image width={310} height={322}
                src="/images/footer-left-laptop.webp"
                alt="Footer Left Laptop"
              />
            </div>
            <div className="getstarted-left-img  absolute right-[25%] top-[32%] w-[73%]">
              <Image 
              width={524} 
              height={532} 
              src="/images/footer-left-img.webp" 
              alt="Footer IMG" 
              />

            </div>
            <div className="getstarted-left-tree absolute left-0 top-0">
              <Image 
              width={214} 
              height={234} 
              src="/images/footer-left-tree.webp" 
              alt="Footer Left Tree" 
              />
            </div>
            <div className="getstarted-left-watch  absolute -top-[5%] left-[35%]">
              <Image 
                width={8} 
                height={182}
                src="/images/footer-left-watch.webp"
                alt="Footer Left Watch"
              />
            </div>
          </div>

          <div className="right relative">
            <h2 className="bg-no-repeat pb-5 text-white before:absolute before:-right-[250] before:-top-[140px] before:h-[806px] before:w-[794px] before:animate-circle-spin before:bg-[url('/images/footer-right-circle.webp')] sm:before:hidden md:before:hidden lg:before:hidden xl:before:hidden 2xl:before:hidden">
              Let's Get Started!
            </h2>
            <p className="text-[#b4a5d6]">
              We’ve got budget-friendly solutions and flexible design packages
              that meet your needs.
            </p>
            <form id="Get Started">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  className="form-control  w-full "
                  placeholder="Enter Your Name"
                  size={50}
                  {...register("name", {
                    required: "Name is required",
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
              </div>
                {errors.name ? (
                <ErrorAlert error={errors.name && "Please use Valid Name"} />
              ) : null}
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control  w-full "
                  placeholder="Enter Your Email Address"
                  size={50}
                  {...register("email", {
                    required: "Email is required",
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                />
              </div>
              {errors.email ? (
                <ErrorAlert error={errors.email && "Please use Correct email Address"} />
              ) : null}
              <div className="form-group">
                <label>Phone No</label>
                <input
                  type="tel"
                  className="form-control  w-full "
                  placeholder="Enter Your Phone Number"
                  size={50}
                  {...register("phone", {
                    required: "Phone No is required",
                    pattern: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                  })}
                />
              </div>
              {errors.phone ? (
                <ErrorAlert error={errors.phone && "Please use Correct Phone Number"} />
              ) : null}
              <div className="mt-[20px]">
                <Button variant="Green" className="" onClick={handleSubmit(onContact)}>
                  Let's Get Started
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
