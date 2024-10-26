"use client";

import React from "react";
import IconEye from "../icons/iconEye";
import IconEyeOff from "../icons/iconEyeOff";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }: InputProps, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative">
        <input
          className={`flex w-full py-3 px-4 text-dark rounded-md bg-input placeholder:text-placeholder outline-none ${className}`}
          {...props}
          type={showPassword ? "text" : props.type}
          ref={ref}
        />
        {props.type === "password" && (
          <span
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IconEyeOff /> : <IconEye />}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
