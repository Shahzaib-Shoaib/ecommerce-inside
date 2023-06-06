import React from "react";
import FormTextField from "./ui/FormTextField";
import Button from "./ui/Button";
import ContactDropdown from "./ui/ContactDropdown";

const ContactForm = () => {
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
        <FormTextField
          placeholder={"Enter Your Name"}
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2"
        />
        <FormTextField
          placeholder={"Enter Your Email Address"}
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2"
        />
        <FormTextField
          placeholder={"Enter Your Phone Number"}
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2"
        />
        <ContactDropdown
          options={services}
          className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2"
        />
        <FormTextField
          placeholder={"Message"}
          className="col-span-2"
        />
        <div className="submit-btn">
          <Button variant="Green">Let's Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
