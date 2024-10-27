"use client";

import React from "react";

export const initialSteps = [
  { id: 1, isActive: true, isCompleted: false },
  { id: 2, isActive: false, isCompleted: false },
  { id: 3, isActive: false, isCompleted: false },
  { id: 4, isActive: false, isCompleted: false },
];

type AuthStep = {
  id: number;
  isActive: boolean;
  isCompleted: boolean;
};

type AuthProgressContextProps = {
  steps: AuthStep[];
  currentStep: AuthStep;
  progress: number;
  handleNextStep: () => void;
  handlePrevStep: () => void;
};

const AuthProgressContext = React.createContext<
  AuthProgressContextProps | undefined
>(undefined);

export const AuthProgressProvider = ({ children }: React.PropsWithChildren) => {
  const [steps, setSteps] = React.useState(initialSteps);

  const currentStep = React.useMemo(
    () => steps.find((step) => step.isActive),
    [steps]
  );

  if (!currentStep) {
    return;
  }

  const progress =
    (steps.filter((step) => step.isCompleted).length / steps.length) * 100;

  const handleNextStep = () => {
    setSteps((prevSteps) =>
      prevSteps.map((step) => {
        if (step.id === currentStep?.id) return { ...step, isActive: false };
        if (step.id === currentStep.id + 1) return { ...step, isActive: true };

        return step;
      })
    );
  };

  const handlePrevStep = () => {
    setSteps((prevSteps) =>
      prevSteps.map((step) => {
        if (step.id === currentStep.id) return { ...step, isActive: false };
        if (step.id === currentStep.id - 1) return { ...step, isActive: true };
        return step;
      })
    );
  };

  return (
    <AuthProgressContext.Provider
      value={{
        steps,
        currentStep,
        handleNextStep,
        handlePrevStep,
        progress,
      }}
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
