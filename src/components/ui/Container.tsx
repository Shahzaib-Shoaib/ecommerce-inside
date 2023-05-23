import React, { FC, HTMLAttributes, forwardRef } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
}



const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({className, children,  ...props}, ref) => {
        return (
            <div
            ref={ref}
            {...props}
            className={`${className} w-[100%] px-[25px] py-[50px] lg:px-[30px] lg:py-[50px] 3xl:px-[50px] 3xl:py-[50px]`}
            >
                {children}
            </div>
        )
    }
)

Container.displayName = 'Container'

export default Container