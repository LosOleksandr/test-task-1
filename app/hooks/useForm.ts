import React from "react";

const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { type, name } = e.target;

    const getValue = () => {
      if (type === "checkbox") {
        return (e.target as HTMLInputElement).checked;
      } else if (type === "select-multiple") {
        return Array.from((e.target as HTMLSelectElement).selectedOptions).map(
          (o) => o.value
        );
      }
      return e.target.value;
    };

    const value = getValue();
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (
    onSubmit: (formData: T, e: React.FormEvent<HTMLFormElement>) => void
  ) => {
    return (e: React.FormEvent<HTMLFormElement>) => {
      if (e && typeof e.preventDefault === "function") {
        e.preventDefault();
      }
      onSubmit(formData, e);
    };
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
