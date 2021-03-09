import React from "react";

interface IControlsProps {
  activeStep: number;
  onNextStep: Function;
  onPrevStep: Function;
}

export const Controls = (props: IControlsProps) => (
  <div className="max-w-md mx-auto">
    <div className="pt-4 flex items-center space-x-4">
      <button
        className={`w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 ${
          props.activeStep === 0
            ? "bg-gray-300 hover:bg-gray-400 cursor-not-allowed"
            : "bg-green hover:bg-green-dark"
        } rounded-md shadow focus:outline-none focus:ring-blue-200 focus:ring-4`}
        disabled={props.activeStep === 0}
        onClick={() => props.onPrevStep()}
      >
        Previous
      </button>
      <button
        className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-green rounded-md shadow hover:bg-green-dark focus:outline-none focus:ring-blue-200 focus:ring-4"
        onClick={() => props.onNextStep()}
      >
        Next
      </button>
    </div>
  </div>
);
