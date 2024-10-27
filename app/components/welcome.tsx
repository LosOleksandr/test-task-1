"use client";

import React from "react";
import useForm from "../hooks/useForm";
import Input from "./ui/input";
import Button from "./ui/button";
import Link from "next/link";
import Label from "./ui/label";
import { useAuthProgress } from "../context/authProgressContext";

const Welcome = () => {
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const { handleSubmit, handleChange } =
    useForm<typeof initialValues>(initialValues);

  const { handleNextStep, currentStep } = useAuthProgress();

  const onSubmit = (values: typeof initialValues) => {
    console.log("values: ", values);
    currentStep.isCompleted = true;
    handleNextStep();
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-y-6 mb-4"
        autoComplete="off"
      >
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="megachad@trychad.com"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="name">Your name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Mega Chad"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="mt-2">
          Create Account
        </Button>
      </form>
      <p className="text-center text-xs">
        Already have an account?
        <Link href={"/"} className="text-accent ml-1">
          Login
        </Link>
      </p>
    </>
  );
};

export default Welcome;
