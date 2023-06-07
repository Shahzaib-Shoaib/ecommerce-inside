import React from "react";
import ContactInfo from "../ContactInfo";
import ErrorAlert from "@/components/ui/ErrorAlert";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { TiTick } from "react-icons/ti";

const Brief = ({
  changeStep,
}: {
  changeStep: ()=>void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const logoTypes = [
    {
      id: "1",
      type: "Font Logo",
      img: "/images/development-icon.webp",
    },
    {
      id: "2",
      type: "Icon Logo",
      img: "/images/development-icon.webp",
    },
    {
      id: "3",
      type: "Emblem Logo",
      img: "/images/development-icon.webp",
    },
    {
      id: "4",
      type: "Mascot Logo",
      img: "/images/development-icon.webp",
    },
    {
      id: "5",
      type: "Abstract Logo",
      img: "/images/development-icon.webp",
    },
    {
      id: "6",
      type: "Initial Logo",
      img: "/images/development-icon.webp",
    },
    {
      id: "7",
      type: "Minimal Logo",
      img: "/images/development-icon.webp",
    },
  ];

  

  const onSubmit = (data: FormData) => {
    console.log(data);
    changeStep();
  };
  const dispkayTick = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
      <div className="Brief_content col-span-2">
        <h3 className="font-bold text-darkblue">
          <span className="h3 underline decoration-caribbeangreen underline-offset-8">
            LOGO
          </span>{" "}
          BRIEF
        </h3>
        <form id="Brief_Form" className="my-5">
          <div className="form_control">
            <label className="font-semibold uppercase text-darkblue">
              Is this a re-design or a ew logo?
            </label>
            <input
              type="text"
              required
              className="form-control  w-full border border-caribbeangreen px-3  py-2"
              size={50}
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Invalid Answer",
                },
              })}
            />
            {errors.name ? (
              <ErrorAlert error={errors.name && errors.name.message} />
            ) : null}
          </div>

          <div className="form_control my-6 flex flex-wrap">
            {/* <label className="cursor-pointer ">
              <input type="radio" className="peer sr-only" name="FontLogo" />
              <div className="rounded-sm w-[150px] max-w-xl  bg-white  text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-caribbeangreen peer-checked:ring-caribbeangreen peer-checked:ring-offset-0">
                <div className="flex flex-col items-center justify-between">
                  <div className="flex items-center justify-between">
                    <Image
                      src={"/images/development-icon.webp"}
                      alt="Font Logo"
                      width={80}
                      height={80}
                      className="m-6"
                    />
                  </div>
                  <div className="h-[30px] peer-checked:bg-caribbeangreen flex items-center justify-center w-full">
                  <TiTick size={30} className="text-white"/>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center font-semibold">Font Logo</p>
            </label> */}
            {logoTypes.map((logo) => (
              <label className="group my-5 cursor-pointer" key={logo.id}>
                <input
                  type="radio"
                  className="peer sr-only"
                  value={logo.type}
                  {...register("logoType", {
                    required: "Select Logo Type is required",
                  })}
                />
                <div className="mx-4 w-[150px] max-w-xl rounded-sm  bg-white  text-gray-600 shadow-lg ring-2 ring-transparent transition-all peer-checked:text-caribbeangreen peer-checked:ring-caribbeangreen peer-checked:ring-offset-0">
                  <div className="flex flex-col items-center justify-between">
                    <div className="flex items-center justify-between">
                      <Image
                        src={logo.img}
                        alt="Font Logo"
                        width={80}
                        height={80}
                        className="m-6"
                      />
                    </div>
                    {/* <div id="logotick" className="h-[30px]  flex items-center justify-center w-full rounded-b-sm select bg-caribbeangreen">
                  <TiTick size={30} className="text-white"/>
                  </div> */}
                <p className="mb-2 text-center font-semibold">{logo.type}</p>
                  </div>
                </div>
              </label>
            ))}
            {errors.logoType ? (
              <ErrorAlert error={errors.logoType && errors.logoType.message} />
            ) : null}
          </div>

          <div className="form_control">
            <label className="font-semibold uppercase text-darkblue">
              Type of Indutry.
            </label>
            <input
              type="text"
              required
              className="form-control  w-full border border-caribbeangreen px-3  py-2"
              size={50}
              {...register("industry", {
                required: "Industry is required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Invalid Answer",
                },
              })}
            />
            {errors.industry ? (
              <ErrorAlert error={errors.industry && errors.industry.message} />
            ) : null}
          </div>

          <div className="form_control">
            <label className="font-semibold uppercase text-darkblue">
              what type of font you want.
            </label>
            <input
              type="text"
              required
              className="form-control  w-full border border-caribbeangreen px-3  py-2"
              size={50}
              {...register("fontType", {
                required: "Font Type is required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Invalid Answer",
                },
              })}
            />
            {errors.fontType ? (
              <ErrorAlert error={errors.fontType && errors.fontType.message} />
            ) : null}
          </div>
          <div className="form_control">
            <label className="font-semibold uppercase text-darkblue">
              Word Name That you want in logo to appear (type in exactly as you
              wanted).
            </label>
            <input
              type="text"
              required
              className="form-control  w-full border border-caribbeangreen px-3  py-2"
              size={50}
              {...register("logoWord", {
                required: "Font Type is required",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Invalid Answer",
                },
              })}
            />
            {errors.logoWord ? (
              <ErrorAlert error={errors.logoWord && errors.logoWord.message} />
            ) : null}
          </div>
          <div className="form_control">
            <label className="font-semibold uppercase text-darkblue">
              TAGLINE THAT YOU WANT IN LOGO TO APPEAR.
            </label>
            <input
              type="text"
              required
              className="form-control  w-full border border-caribbeangreen px-3  py-2"
              size={50}
              {...register("tagline", {
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Invalid Answer",
                },
              })}
            />
            {errors.tagline ? (
              <ErrorAlert error={errors.tagline && errors.tagline.message} />
            ) : null}
          </div>
          <div className="form_control">
            <label className="font-semibold uppercase text-darkblue">
              PLEASE PROVIDE A BRIEF DESCRIPTION OF YOUR BUSINESS. YOU MAY ALSO
              WANT TO LIST WEBSITE ADDRESSES OF YOUR COMPETITORS, IF ANY.
            </label>
            <input
              type="text"
              required
              className="form-control  w-full border border-caribbeangreen px-3  py-2"
              size={50}
              {...register("desc", {
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Invalid Answer",
                },
              })}
            />
            {errors.desc ? (
              <ErrorAlert error={errors.desc && errors.desc.message} />
            ) : null}
          </div>
          <div className="form_control">
            <label className="font-semibold uppercase text-darkblue">
              ANYTHING THAT YOU DO NOT LIKE AND WE SHOULD AVOID THAT IN OUR
              DESIGN CONCEPT. (COLOR, PICTURE OR CERTAIN NATURE, ETC)
            </label>
            <input
              type="text"
              required
              className="form-control  w-full border border-caribbeangreen px-3  py-2"
              size={50}
              {...register("restrictions", {
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Invalid Answer",
                },
              })}
            />
            {errors.restrictions ? (
              <ErrorAlert
                error={errors.restrictions && errors.restrictions.message}
              />
            ) : null}
          </div>
          <div className="form_control">
            <label className="font-semibold uppercase text-darkblue">
              existing website address, if and
            </label>
            <input
              type="text"
              required
              className="form-control  w-full border border-caribbeangreen px-3  py-2"
              size={50}
              {...register("webAddress", {
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Invalid Answer",
                },
              })}
            />
            {errors.webAddress ? (
              <ErrorAlert
                error={errors.webAddress && errors.webAddress.message}
              />
            ) : null}
          </div>

          <div className="mt-[20px]">
            <Button
              variant="Green"
              className=""
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <ContactInfo />
    </div>
  );
};

export default Brief;
