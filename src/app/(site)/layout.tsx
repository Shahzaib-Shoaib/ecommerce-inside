"use client"
import Header from "@/components/Header/Header";
import CopyRightFooter from "@/components/Footer/CopyRightFooter";
import Footer from "@/components/Footer/Footer";
import Expertise from "@/components/Expertise";
import GetStarted from "@/components/GetStarted";
import Testimonials from "@/components/Testimonials";
import ContactModal from "@/components/ContactModal";

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
