"use client";
import React, { FC, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Button from "./ui/Button";
import useRQGlobalState from "~/utils/useRQGlobalState";
import ErrorAlert from "./ui/ErrorAlert";

type FormData = {
  email: string;
};

const ContactModal: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [modalActive, setModalActive] = useRQGlobalState("modal", false);
  // if(!visible) return null;
  if (!modalActive) return null;

  const onContact = (data: FormData) => {
    console.log(data);
  };

  return (
    <Dialog.Root open={modalActive} onOpenChange={setModalActive}>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content>
        <div className="fixed inset-0 z-50 flex h-[100vh] items-center justify-center overflow-hidden bg-black bg-opacity-25 backdrop-blur-sm">
          <div className="Contact_Modal Modal_wrapper flex flex-col p-4 ">
            <div
              className="z-[51] -mb-5 -mr-5 flex h-10 w-10 cursor-pointer items-center justify-center place-self-end rounded-full border border-gray-500 bg-white"
              onClick={() => setModalActive(false)}
            >
              <IoClose size={24} className="text-black" />
            </div>
            <div className="modal_content relative min-w-[320px] border-2 border-darkblue bg-darkblue sm:h-[390px] md:h-[390px] lg:h-[390px] lg:w-[450px] xl:h-[390px] xl:w-[450px] 2xl:h-[390px] 2xl:w-[450px]  3xl:w-[900px] 4xl:w-[900px] 5xl:w-[1200px] 6xl:w-[1200px]">
              <div className="images h-full w-[75%] bg-caribbeangreen p-9 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
                <div className="grid grid-cols-4 gap-7">
                  <div className="img col-span-2 max-h-[250px] max-w-[363px] border border-black shadow-2xl shadow-black">
                    {/* <img src="/images/popup-image-1.webp" alt="Popup img 1" className=''/> */}
                    <Image
                      src={"/images/popup-image-1.webp"}
                      alt="Popup img 1"
                      width={363}
                      height={250}
                      className="object-fill"
                    />
                  </div>
                  <div className="img col-span-2 max-h-[250px] max-w-[363px] border border-black shadow-2xl shadow-black">
                    {/* <img src="/images/popup-image-2.webp" alt="Popup img 2" /> */}
                    <Image
                      src={"/images/popup-image-2.webp"}
                      alt="Popup img 2"
                      width={363}
                      height={250}
                      className="object-fill"
                    />
                  </div>
                  <div className="img col-span-1 max-h-[316px] max-w-[197px] border border-black bg-white shadow-2xl shadow-black">
                    {/* <img src="/images/popup-image-3.webp" alt="Popup img 3" /> */}
                    <Image
                      src={"/images/popup-image-3.webp"}
                      alt="Popup img 3"
                      width={197}
                      height={316}
                      className="object-cover"
                    />
                  </div>
                  <div className="img col-span-2 max-h-[316px] max-w-[380px] border border-black bg-[#082187] shadow-2xl shadow-black">
                    {/* <img src="/images/popup-image-4.webp" alt="Popup img 4" /> */}
                    <Image
                      src={"/images/popup-image-4.webp"}
                      alt="Popup img 4"
                      width={380}
                      height={316}
                      className="object-fill"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 top-0 my-auto h-fit w-full min-w-[320px] border-2 border-caribbeangreen bg-darkblue p-6 3xl:w-[370px] 4xl:w-[370px] 5xl:w-[480px] 6xl:w-[480px]">
                <h6 className="mb-4 font-medium uppercase text-white">
                  GET UPTO
                </h6>
                <h1 className="mb-6 text-[60px] font-extrabold uppercase text-caribbeangreen">
                  75% OFF
                </h1>
                <h6 className="mb-2 font-medium uppercase text-white">
                  ON ALL SERVICES
                </h6>
                <p className="mb-2 font-medium uppercase text-white">
                  *OFFER IS AVAILABLE FOR A LIMITED TIME!
                </p>
                <form id="Get Started">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control  w-full "
                      placeholder="Enter Your Email Address"
                      size={50}
                      {...register("email", {
                        required: "Email is required",
                        pattern:
                          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      })}
                    />
                  </div>
                  {errors.email ? (
                    <ErrorAlert
                      error={errors.email && "Please use Correct email Address"}
                    />
                  ) : null}
                  <div className="mt-[20px]  w-fit rounded-md border border-white">
                    <Button
                      variant="Green"
                      className=""
                      onClick={handleSubmit(onContact)}
                    >
                      Let's Get Started
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ContactModal;
