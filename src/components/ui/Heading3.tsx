import React, { FC, HTMLAttributes, forwardRef } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const Heading3 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        {...props}
        className={`font-poppins font-medium text-[16px] leading-[22px] md:text-[18px] md:leading-[24px] lg:text-[20px] lg:leading-[26px] xl:text-[24px] xl:leading-[30px] 2xl:text-[26px] 2xl:leading-[32px] 3xl:text-[28px] 3xl:leading-[34px] 4xl:text-[32px] 4xl:leading-[36px] 5xl:text-[36px] 5xl:leading-[40px] 6xl:text-[40px] 6xl:leading-[46px] ${className}`}
      >
        {children}
      </h3>
    );
  }
);

Heading3.displayName = "Heading3";

export default Heading3;
