import React, { FC, HTMLAttributes, forwardRef } from 'react'

interface FluidContainerProps extends HTMLAttributes<HTMLDivElement> {
}



const FluidContainer = forwardRef<HTMLDivElement, FluidContainerProps>(
    ({className, children,  ...props}, ref) => {
        return (
            <div
            ref={ref}
            {...props}
            className={`${className} w-[100%] mx-auto flex flex-col items-center justify-center px-[20px] lg:px-[30px] 2xl:px-[15px]`}
            >
                {children}
            </div>
        )
    }
)

FluidContainer.displayName = 'FluidContainer'

export default FluidContainer