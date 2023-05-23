import React, { FC, HTMLAttributes, forwardRef } from 'react'

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
}



const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({className, children,  ...props}, ref) => {
        return (
            <p
            ref={ref}
            {...props}
            className={`text-[16px] leading-[24px] font-normal font-poppins  ${className}`}
            >
                {children}
            </p>
        )
    }
)

Paragraph.displayName = 'Paragraph'

export default Paragraph