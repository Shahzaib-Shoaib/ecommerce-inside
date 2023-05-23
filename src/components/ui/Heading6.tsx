import React, { FC, HTMLAttributes, forwardRef } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const Heading6 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h6
        ref={ref}
        {...props}
        className={`font-poppins font-normal text-[10px] leading-[16px] md:text-[12px] md:leading-[18px] lg:text-[14px] lg:leading-[20px] xl:text-[18px] xl:leading-[24px] 2xl:text-[20px] 2xl:leading-[26px] 3xl:text-[22px] 3xl:leading-[28px] 4xl:text-[26px] 4xl:leading-[30px] 5xl:text-[30px] 5xl:leading-[34px] 6xl:text-[34px] 6xl:leading-[40px] ${className}`}
      >
        {children}
      </h6>
    );
  }
);

Heading6.displayName = "Heading6";

export default Heading6;
