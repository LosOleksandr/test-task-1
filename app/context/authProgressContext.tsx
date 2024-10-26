"use client";
import React from "react";

type AuthProgressContextProps = {
  step: number;
  progress: number;
  nextStep: () => void;
  prevStep: () => void;
};

const AuthProgressContext = React.createContext<
  AuthProgressContextProps | undefined
>(undefined);

export const AuthProgressProvider = ({ children }: React.PropsWithChildren) => {
  const [step, setStep] = React.useState(1);
  const maxSteps = 4;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, maxSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const progress = (step / maxSteps) * 100;

  return (
    <AuthProgressContext.Provider
      value={{ step, nextStep, prevStep, progress }}
    >
      {children}
    </AuthProgressContext.Provider>
  );
};

export const useAuthProgress = () => {
  const context = React.useContext(AuthProgressContext);
  if (!context) {
    throw new Error(
      "useAuthProgress must be used within an AuthProgressProvider"
    );
  }
  return context;
};
