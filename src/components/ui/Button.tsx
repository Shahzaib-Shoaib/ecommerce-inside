import React, { FC } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean
    variant: "White" | "Green" | "Dark" 
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ isLoading, variant, className, children, ...props }, ref) => {
    return (
        <button
            className={`btn ${className} ${variant === "Dark" && " Dark" } ${variant === "Green" && " Green" } ${variant === "White" && " White" }`}
            ref={ref}
            // disabled={isLoading}
            {...props}>
            {/* {isLoading ? <AiOutlineLoading3Quarters className='mr-2 h-4 w-4 animate-spin' /> : null} */}
            {children}
            <span className={`${className} ${variant === "Dark" && " Dark" } ${variant === "Green" && " Green" } ${variant === "White" && " White" }`}>{children}</span>
        </button>
    )
})

Button.displayName = "Button"

export default Button




{/* <Button variant='Green'>Request Quote For Free</Button> */}
{/* <Button variant='Dark'>Request Quote For Free</Button> */}