import React, { FC, HTMLAttributes, forwardRef } from 'react'

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
}



const Span = forwardRef<HTMLSpanElement, SpanProps>(
    ({className, children,  ...props}, ref) => {
        return (
            <span
            ref={ref}
            {...props}
            className={`text-[14px] leading-[18px] text-span font-normal font-poppins  ${className}`}
            >
                {children}
            </span>
        )
    }
)

Span.displayName = 'Span'

export default Span