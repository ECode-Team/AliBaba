import React, { useState } from "react";
import "../../../styles/bookingpage/stepper.scss";

const steps = [
  {
    name: "Train selection",
    content: <div>Content for Step 1: Train selection</div>,
  },
  {
    name: "Passengers Info",
    content: <div>Content for Step 2: Passengers Info</div>,
  },
  { name: "Review", content: <div>Content for Step 3: Review</div> },
  { name: "Payment", content: <div>Content for Step 4: Payment</div> },
];

export const TrainAccordion = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const getStepStatus = (stepIndex) => {
    if (stepIndex < activeStep) {
      return "completed";
    }
    if (stepIndex === activeStep) {
      return "active";
    }
    return "";
  };

  const progress = (activeStep / (steps.length - 1)) * 100;

  return (
    <div className="stepper-container">
      <ul className="stepper">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        {steps.map((step, index) => (
          <li key={index} className={`step ${getStepStatus(index)}`}>
            <button className="step-button">{index + 1}</button>
            <span className="step-name">{step.name}</span>
          </li>
        ))}
      </ul>

      <div className="step-content">{steps[activeStep].content}</div>

      <div className="navigation-buttons">
        <button
          className="prev-button"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Back
        </button>
        <button
          className="next-button"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};