"use client";

import React from "react";
import { useAuthProgress } from "../../context/authProgressContext";
import TrackerStep from "./trackerStep";
import StepToggler from "../stepToggler";

const stepsHeaders = [
  "Welcome",
  "Connect your Shopify store",
  "Connect your customer support email",
  "Done",
];

const AuthStepTracker = () => {
  const { steps, currentStep } = useAuthProgress();

  return (
    <div>
      <ul>
        {steps.length !== 0
          ? steps.map(({ id, isActive, isCompleted }, i) => {
              return (
                <TrackerStep
                  key={id}
                  step={id}
                  maxSteps={steps.length}
                  header={stepsHeaders[i]}
                  isActive={isActive}
                  isCompleted={isCompleted}
                />
              );
            })
          : null}
      </ul>
      {(currentStep.id !== 1 || currentStep.isCompleted) && <StepToggler />}
    </div>
  );
};

export default AuthStepTracker;
