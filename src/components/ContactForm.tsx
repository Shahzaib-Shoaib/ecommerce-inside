import React from "react";
import FormTextField from "./ui/FormTextField";
import ContactDropdown from "./ui/ContactDropdown";

const ContactForm = () => {
  const services = [
    {
      id: 1,
      name: "Services",
    },
    {
      id: 1,
      name: "Mobile Apps",
    },
    {
      id: 1,
      name: "Web Development",
    },
    {
      id: 1,
      name: "Branding",
    },
    {
      id: 1,
      name: "Digital Marketing",
    },
    {
      id: 1,
      name: "Software Solutions",
    },
  ];
  return (
    <div className="contact-form">
      <div className="personal grid grid-cols-1 gap-4 md:grid-cols-2">
        <FormTextField
          ariaLable={"Name"}
          placeholder={"Enter Your Name"}
          className="col-span-2 md:col-span-1"
        />
        <FormTextField
          ariaLable={"Email"}
          placeholder={"Enter Your Email Address"}
          className="col-span-2 md:col-span-1"
        />
        <FormTextField
          ariaLable={"Phone"}
          placeholder={"Enter Your Phone Number"}
          className="col-span-2 md:col-span-1"
        />
        <ContactDropdown
          ariaLable={"Phone"}
          options={services}
          className="col-span-2 md:col-span-1"
        />
        <FormTextField
          ariaLable={"message"}
          placeholder={"Message"}
          className="col-span-2"
        />
        <div className="submit-btn">
          <input type="submit" value={"Let's Get Started"} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
