import React, { FC, HTMLAttributes, forwardRef } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const Heading5 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h5
        ref={ref}
        {...props}
        className={`font-poppins font-normal text-[12px] leading-[18px] md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[22px] xl:text-[20px] xl:leading-[26px] 2xl:text-[22px] 2xl:leading-[28px] 3xl:text-[24px] 3xl:leading-[30px] 4xl:text-[28px] 4xl:leading-[32px] 5xl:text-[32px] 5xl:leading-[36px] 6xl:text-[36px] 6xl:leading-[42px] ${className}`}
      >
        {children}
      </h5>
    );
  }
);

Heading5.displayName = "Heading5";

export default Heading5;
