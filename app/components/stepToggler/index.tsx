"use client";
import { useAuthProgress } from "@/app/context/authProgressContext";
import React from "react";
import Button from "../ui/button";

const StepToggler = () => {
  const { currentStep, handleNextStep, handlePrevStep } = useAuthProgress();

  const disableNext = React.useMemo(
    () => !currentStep.isCompleted,
    [currentStep.isCompleted]
  );

  const disableBack = React.useMemo(
    () => currentStep.id === 1,
    [currentStep.id]
  );

  return (
    <div className="flex justify-between w-full mt-[48px]">
      <Button
        variant="ghost"
        onClick={handlePrevStep}
        className="max-w-max"
        disabled={disableBack}
      >
        Back
      </Button>
      <Button
        variant="ghost"
        onClick={handleNextStep}
        className="max-w-max"
        disabled={disableNext}
      >
        Next
      </Button>
    </div>
  );
};

export default StepToggler;
