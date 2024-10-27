"use client";

import React from "react";
import IconSuccess from "../icons/iconSuccess";

type StepProps = {
  step: number;
  maxSteps: number;
  header: string;
  isActive: boolean;
  isCompleted: boolean;
};

const TrackerStep = ({
  step,
  maxSteps,
  header,
  isActive,
  isCompleted,
}: StepProps) => {
  return (
    <li className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div
            className={`flex justify-center items-center w-8 h-8 rounded-full border-2 relative z-10 
            ${isActive ? "border-accent" : !isCompleted ? "border-muted" : ""} 
            ${isCompleted ? "bg-accent border-accent" : ""}`}
          >
            {isCompleted && <IconSuccess width={12} height={9} />}
          </div>

          {isCompleted && isActive && (
            <div
              className={
                "absolute w-11 h-11 top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 border-2 border-accent rounded-full bg-background_secondary"
              }
            />
          )}
        </div>

        {step !== maxSteps && (
          <span
            className={`w-[2px] h-12 block ${
              isCompleted ? "bg-accent" : "bg-muted"
            }`}
          />
        )}
      </div>
      <h2 className="text-primary_foreground mt-1 text-start">{header}</h2>
    </li>
  );
};

export default TrackerStep;
