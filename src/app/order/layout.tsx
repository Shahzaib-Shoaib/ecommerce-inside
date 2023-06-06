import CopyRightFooter from "~/components/Footer/CopyRightFooter";
import Head from "~/components/OrderProcess/Head";
import OrderInfoSec from "~/components/OrderProcess/OrderInfoSec";

const OrderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`mx-auto max-w-[1920px]`}>
        <Head />
        <OrderInfoSec />
        <div className="div_container py-[50px]">{children}</div>
        <CopyRightFooter />
      </body>
    </html>
  );
};

export default OrderLayout;
