import { IconProps } from "@/app/types/icon";

const IconEyeOff = ({ width = 16, height = 17 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#a)"
        stroke="#4F637D"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.6 3.327a6.08 6.08 0 0 1 1.4-.16c4.667 0 7.333 5.333 7.333 5.333-.404.757-.887 1.47-1.44 2.127m-4.48-.714a2 2 0 1 1-2.826-2.826m5.373 5.373A6.714 6.714 0 0 1 8 13.833C3.333 13.833.667 8.5.667 8.5A12.3 12.3 0 0 1 4.04 4.54l7.92 7.92ZM.667 1.167l14.666 14.666" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconEyeOff;
