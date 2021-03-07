import React, { useState } from "react";
import { Controls, Initial } from "../components/Signup";

const Onboarding: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <Initial />
          <Controls />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
