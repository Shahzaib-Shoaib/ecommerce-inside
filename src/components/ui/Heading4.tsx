import React, { FC, HTMLAttributes, forwardRef } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const Heading4 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        {...props}
        className={`font-poppins font-normal text-[14px] leading-[20px] md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[24px] xl:text-[22px] xl:leading-[28px] 2xl:text-[24px] 2xl:leading-[30px] 3xl:text-[26px] 3xl:leading-[32px] 4xl:text-[30px] 4xl:leading-[34px] 5xl:text-[34px] 5xl:leading-[38px] 6xl:text-[38px] 6xl:leading-[44px] ${className}`}
      >
        {children}
      </h4>
    );
  }
);

Heading4.displayName = "Heading4";

export default Heading4;
