"use client";

import React from "react";
import useForm from "../hooks/useForm";
import Input from "./ui/input";
import Button from "./ui/button";
import ChadLogo from "./icons/chadLogo";
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

  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  const { step } = useAuthProgress();
  console.log("step : ", step);

  return (
    <div className="w-full max-w-[480px] px-8 py-9 bg-background rounded-md shadow-md">
      <div className="flex items-center mb-6 gap-1">
        <ChadLogo />
        <h2 className="text-[24px] font-semibold">Chad</h2>
      </div>
      <h1 className="text-[24px] font-semibold mb-4">Welcome to Chad</h1>
      <p className="mb-8 leading-5 text-sm break-all">
        Go live in 10 minutes! Our self-service widget empowers your customers
        to manage orders and track shipments 24/7 without driving you crazy.
      </p>
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
    </div>
  );
};

export default Welcome;
