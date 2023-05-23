import React, { FC, HTMLAttributes, forwardRef } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const Heading1 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={`font-poppins text-[20px] font-bold leading-[26px] md:text-[22px] md:leading-[28px] lg:text-[24px] lg:leading-[30px] xl:text-[28px] xl:leading-[34px] 2xl:text-[30px] 2xl:leading-[36px] 3xl:text-[32px] 3xl:leading-[38px] 4xl:text-[36px] 4xl:leading-[40px] 5xl:text-[40px] 5xl:leading-[45px] 6xl:text-[45px] 6xl:leading-[50px] ${className}`}
      >
        {children}
      </h1>
    );
  }
);

Heading1.displayName = "Heading1";

export default Heading1;
