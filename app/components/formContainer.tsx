import React from "react";
import ChadLogo from "./icons/chadLogo";

type FormContainerProps = {
  title: string;
  text: string;
};

const FormContainer = ({
  children,
  title,
  text,
}: React.PropsWithChildren<FormContainerProps>) => {
  return (
    <div className="w-full max-w-[480px] px-8 py-9 bg-background rounded-md shadow-md">
      <div className="flex items-center mb-6 gap-1">
        <ChadLogo />
        <h2 className="text-[24px] font-semibold">Chad</h2>
      </div>
      <h1 className="text-[24px] font-semibold mb-4">{title}</h1>
      <p className="mb-8 leading-5 text-sm break-all">{text}</p>
      {children}
    </div>
  );
};

export default FormContainer;
