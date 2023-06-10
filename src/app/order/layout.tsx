import CopyRightFooter from "@/components/Footer/CopyRightFooter";
import Head from "@/components/OrderProcess/Head";
import OrderInfoSec from "@/components/OrderProcess/OrderInfoSec";

export const metadata = {
  title: "Order | Ecommerce Inside",
  description:
    "Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
    icons: [{ rel: "icon", url: "/images/favicon.webp" }],
};

const OrderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className={`mx-auto `}>
        <Head />
        <OrderInfoSec />
        <div className="div_container py-[50px]">{children}</div>
        <CopyRightFooter />
      </div>
  );
};

export default OrderLayout;
