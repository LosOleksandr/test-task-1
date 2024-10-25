import { IconProps } from "@/app/types/icon";

const IconEye = ({ width = 16, height = 17 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M.667 8.5S3.333 3.167 8 3.167 15.333 8.5 15.333 8.5 12.667 13.833 8 13.833.667 8.5.667 8.5Z"
        stroke="#4F637D"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke="#4F637D"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconEye;
