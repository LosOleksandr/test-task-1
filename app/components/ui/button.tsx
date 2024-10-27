import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "ghost";
  size?: "icon" | "small" | "medium" | "large";
};

const getButtonVariant = (
  variant: ButtonProps["variant"] = "default",
  size: ButtonProps["size"] = "medium"
) => {
  const sizeClasses = {
    icon: "w-10 h-10 p-1",
    small: "py-2 text-xs",
    medium: "py-[11px] text-sm",
    large: "py-4 text-base",
  };

  const variantClasses = {
    default: "text-primary_foreground bg-accent hover:bg-accent_hover",
    ghost: "text-primary bg-transparent",
  };

  return `${variantClasses[variant]} ${sizeClasses[size]}`;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      asChild = false,
      variant = "default",
      size = "medium",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    getButtonVariant(variant);
    return (
      <Comp
        className={` inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none w-full py-[11px] disabled:cursor-not-allowed focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ${getButtonVariant(
          variant,
          size
        )} ${className || ""}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
