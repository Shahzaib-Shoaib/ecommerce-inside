"use client";
import React from "react";
import Button from "./ui/Button";
import ErrorAlert from "./ui/ErrorAlert";
import { useForm } from "react-hook-form";
import packageCatagories from "@/data/packageCatagories";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onContact = (data: FormData) => {
    console.log(data);
  };

  const services = [
    {
      id: "1",
      name: "Services",
    },
    {
      id: "2",
      name: "Mobile Apps",
    },
    {
      id: "3",
      name: "Web Development",
    },
    {
      id: "4",
      name: "Branding",
    },
    {
      id: "5",
      name: "Digital Marketing",
    },
    {
      id: "6",
      name: "Software Solutions",
    },
  ];
  return (
    <div className="contact-form">
      <div className="personal grid grid-cols-2 gap-4 ">
        <form id="Get Started">
          <div className="relative mb-1 mt-6 border-2 border-darkgray p-2">
            <label className="absolute -top-[18px] left-4 bg-white px-[10px] py-[3px] text-[14px] font-medium text-darkblue">
              Your Name
            </label>
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
          <div className=" relative mb-1 mt-6 border-2 border-darkgray p-2">
            <label className="absolute -top-[18px] left-4 bg-white px-[10px] py-[3px] text-[14px] font-medium text-darkblue">
              Email Address
            </label>
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
            <ErrorAlert
              error={errors.email && "Please use Correct email Address"}
            />
          ) : null}
          <div className="relative mb-1 mt-6 border-2 border-darkgray p-2">
            <label className="absolute -top-[18px] left-4 bg-white px-[10px] py-[3px] text-[14px] font-medium text-darkblue">
              Phone No
            </label>
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
            <ErrorAlert
              error={errors.phone && "Please use Correct Phone Number"}
            />
          ) : null}
          <div className="relative mb-1 mt-6 border-2 border-darkgray p-2">
            <label className="absolute -top-[18px] left-4 bg-white px-[10px] py-[3px] text-[14px] font-medium text-darkblue">
              Services
            </label>
            <select
              className=" form-control w-full  cursor-pointer  border-none bg-transparent  text-gray-700 placeholder-gray-700 focus:outline-none focus:ring-0"
              placeholder="Select Services"
              {...register("services", {
                required: "Services is required",
              })}
            >
              {packageCatagories.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          {errors.services ? (
            <ErrorAlert
              error={errors.services && "Please Select Services"}
            />
          ) : null}
          <div className="relative mb-1 mt-6 border-2 border-darkgray p-2">
            <label className="absolute -top-[18px] left-4 bg-white px-[10px] py-[3px] text-[14px] font-medium text-darkblue">
              Description
            </label>
            <textarea
              className="form-control  w-full border-none bg-transparent  text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-0"
              placeholder="Enter Description"
              cols={50}
              rows={5}
              {...register("desc", {
                required: "Description is required",
              })}
            />
          </div>
          {errors.desc ? (
            <ErrorAlert
              error={errors.desc && "Please Write Description"}
            />
          ) : null}
          <div className="mt-[20px]">
            <Button
              variant="Green"
              className=""
              onClick={handleSubmit(onContact)}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
