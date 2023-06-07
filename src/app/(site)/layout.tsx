"use client"
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import CopyRightFooter from "@/components/Footer/CopyRightFooter";
import Footer from "@/components/Footer/Footer";
import Expertise from "@/components/Expertise";
import GetStarted from "@/components/GetStarted";
import Testimonials from "@/components/Testimonials";
import ContactModal from "@/components/ContactModal";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata = {
//   title: "Ecommerce Inside",
//   description:
//     "Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
//     icons: [{ rel: "icon", url: "/images/favicon.webp" }],
// };

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="page_content">
          <Header />
          <ContactModal />
          {children}
          <Expertise />
          <GetStarted />
          <Testimonials />
          <Footer />
          <CopyRightFooter />
      </div>
  );
}
