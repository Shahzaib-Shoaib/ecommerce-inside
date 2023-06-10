"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ContactInfo from "@/components/OrderProcess/ContactInfo";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";
import packages from "@/data/packages";

type paramsType = {
  packageId: string;
};

type PackageType = {
  id: string;
  name: string;
  price: string;
  discprice: string;
  desc: string;
  cat: string;
  points: string[];
}[];

type orderDataType = {
  Name: string;
  email: string;
  phone: string;
  description: string;
  category: string;
  packageId: string;
  packageName: string;
  packagePrice: string;
};

const OrderPage = ({ params }: { params: paramsType }) => {
  const [orderData, setOrderData] = useState<orderDataType>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const orderPackage: PackageType = packages.filter((obj) => {
    return obj.id === params.packageId;
  });

  const onContact = (data: FormData) => {
    let formdata: orderDataType = {
      Name: "",
      email: "",
      phone: "",
      description: "",
      category: "",
      packageId: "",
      packageName: "",
      packagePrice: "",
    };
    
    formdata.Name = data.name;
    formdata.email = data.email;
    formdata.phone = data.phone;
    formdata.description = data.desc;
    formdata.category = orderPackage[0]?.cat;
    formdata.packageId = orderPackage[0]?.id;
    formdata.packageName = orderPackage[0]?.name;
    formdata.packagePrice = orderPackage[0]?.discprice;

    console.log(formdata)

    const emailConfig = {
      Username: 'fahadrazzaq41@gmail.com',
      Password: '622924E192AD5C1C58A1A7610AB5BF2A71F4',
      Host: 'smtp.elasticemail.com',
      Port : 2525,
      To : 'them@website.com',
      From : formdata.email,
      Subject : "Order from Ecommerce Inside",
      Body : formdata
  
  }

    if(window.Email) {
      window.Email.send(emailConfig)
    }
  };

  return (
    <div className="order_page">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2">
        {/* Package Card */}
        <div className="card bg_white col-span-1 mx-auto max-w-[480px] rounded-md border border-caribbeangreen p-4 shadow-lg">
          <h6 className="font-bold  text-darkblue">{orderPackage[0]?.name}</h6>
          <div className="my-2 border-t-2"></div>
          <h3 className="mb-2 font-bold text-caribbeangreen">
            {orderPackage[0]?.discprice}
          </h3>
          {orderPackage[0]?.points.map((point, index) => (
            <p className="my-1 font-normal text-darkblue" key={index}>
              {point}
            </p>
          ))}
          <div className="my-2 border-t-2"></div>
          <Link href={"#"}>
            <p className="text-center text-caribbeangreen">Click here to</p>
            <h6 className="text-center  font-bold text-darkblue">Live Chat</h6>
          </Link>
        </div>

        {/* Form */}
        <div className="form col-span-1  px-4 ">
          <h3 className="heading mb-6 font-normal text-darkblue">
            Please Fill the Form
          </h3>

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
                  pattern:
                    /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
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
              <ErrorAlert error={errors.desc && "Please Write Description"} />
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

        {/* Contact Info */}
        <ContactInfo />
      </div>
    </div>
  );
};

export default OrderPage;
