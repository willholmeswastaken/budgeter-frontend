import React, { useState } from "react";
import { Allocations, Controls, Initial } from "../components/Signup";

const SignUp: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const onNextStep: Function = () => {
    if (activeStep === 1) {
      // push to new page
    } else {
      setActiveStep(activeStep + 1);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10 animate__animated animate__fadeIn">
          {activeStep === 0 && <Initial />}
          {activeStep === 1 && <Allocations monthlyIncome={2833} />}
          <Controls
            activeStep={activeStep}
            onPrevStep={() => setActiveStep(activeStep - 1)}
            onNextStep={onNextStep}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
