import React from "react";
import InfoSec from "@/components/InfoSec";
import InfoSecData from "@/data/InfoSecData";
export const metadata = {
  title: "Services | Ecommerce Inside",
  description:
    "Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
};
const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content">
      {children}
      <InfoSec infocardData={InfoSecData} smallHeading={"We Are The Best Branding Agency USA"} mainHeading={"Redefine. Revolution. Robust"} desc={"Ecommerce Inside emphasizes on redefining the monotonous tech paradigms and works on bridging revolutionary robust and rigorous apps, solutions, and services that facilitates clients and customers at the most affordable prices."} />
    </div>
  );
};

export default ServicesLayout;