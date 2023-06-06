import React, { FC } from "react";
import Button from "../ui/Button";

const TrustCTA: FC = () => {
  return (
    <section className="overflow-hidden bg-[#0E0D23] py-0">
        <div className="div_container flex  items-center justify-between sm:flex-col sm:py-5 gap-5 md:flex-col md:py-5 lg:flex-col lg:py-5">
            <div>
                <h6 className="font-extrabold text-white">WE ARE WIDELY <br /><span className="font-normal">RECOGNIZED ON</span></h6>
            </div>
            <div>
                <img src="/images/cta.webp" alt="cta" />
            </div>
            <div>
                <Button variant="Green">ORDER NOW</Button>
            </div>
        </div>
    </section>
  );
};

export default TrustCTA;
