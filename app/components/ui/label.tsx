import React from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {};

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }: LabelProps, ref) => {
    return (
      <label
        className={`text-sm mb-2 block ${className || ""}`}
        ref={ref}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";

export default Label;
