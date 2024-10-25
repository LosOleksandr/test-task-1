import { IconProps } from "@/app/types/icon";
import React from "react";

const IconSuccess = ({ width = 12, height = 9 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.085 1.374 4.437 8.022 1.415 5"
        stroke="#000"
        strokeWidth="1.813"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconSuccess;
