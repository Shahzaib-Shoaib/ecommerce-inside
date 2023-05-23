import React, { AnchorHTMLAttributes, FC, forwardRef } from "react";

interface CollisionButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: "White" | "Green" | "Dark";
}

const CollisionButton = forwardRef<HTMLAnchorElement, CollisionButtonProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <div
        className={`border rounded-md relative   w-fit ${
          variant === "Dark" && " border-darkblue bg-caribbeangreen"
        } ${variant === "Green" && " border-caribbeangreen bg-darkblue"} ${
          variant === "White" && " border-darkblue bg-white "
        }`}
      >
        <a
          className={`collision absolute z-10 ${className} ${
            variant === "Dark" && " collisionDark"
          } ${variant === "Green" && " collisionGreen"} ${
            variant === "White" && " collisionWhite"
          }`}
          ref={ref}
          {...props}
        >
          {children}
        </a>
      </div>
    );
  }
);

export default CollisionButton;
