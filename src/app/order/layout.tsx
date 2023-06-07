import CopyRightFooter from "@/components/Footer/CopyRightFooter";
import Head from "@/components/OrderProcess/Head";
import OrderInfoSec from "@/components/OrderProcess/OrderInfoSec";

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
