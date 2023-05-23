import React, { FC, HTMLAttributes, forwardRef } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const Heading2 = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        {...props}
        className={`font-poppins  text-[18px] leading-[24px] md:text-[20px] md:leading-[26px] lg:text-[22px] lg:leading-[28px] xl:text-[26px] xl:leading-[32px] 2xl:text-[28px] 2xl:leading-[34px] 3xl:text-[30px] 3xl:leading-[36px] 4xl:text-[34px] 4xl:leading-[38px] 5xl:text-[38px] 5xl:leading-[42px] 6xl:text-[42px] 6xl:leading-[48px] ${className}`}
      >
        {children}
      </h2>
    );
  }
);

Heading2.displayName = "Heading2";

export default Heading2;
