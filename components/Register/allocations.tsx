import React, { useState } from "react";

interface AllocationsProps {
  monthlyIncome: number;
}

export const Allocations = (props: AllocationsProps) => {
  const [bills, setBillsAmount] = useState(0);
  const [spending, setSpendingAmount] = useState(0);
  const [savings, setSavingsAmount] = useState(0);
  const [estimatedMonthlyIncomeRemaining, setEstimatedMonthlyIncomeRemaining ] = useState(props.monthlyIncome);

  return (
    <div className="max-w-md mx-auto animate__animated animate__fadeIn">
      <div className="flex items-center space-x-5">
        <div className="block font-semibold text-xl self-start text-gray-700">
          <h2 className="leading-relaxed">Hi Will!</h2>
          <p className="text-sm text-gray-500 font-normal leading-relaxed">
            Now let's dig into your finances a bit more!
          </p>
        </div>
      </div>
      <div className="py-8 leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 font-semibold">
        <div className="flex flex-col">
          <h1>Monthly Income Left: £{estimatedMonthlyIncomeRemaining}</h1>
        </div>
        <div className="divide-y divide-gray-200"></div>
        <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          <div className="flex flex-col">
            <label className="leading-loose">
              How much are you spending on{" "}
              <span className="font-bold">bills</span> each month?
            </label>
            <input
              type="number"
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
              placeholder="1200"
              onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                  const newVal = Number((event.target as HTMLInputElement).value);
                  setBillsAmount(newVal);
                  setEstimatedMonthlyIncomeRemaining(props.monthlyIncome - newVal - spending - savings);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="leading-loose">
              How much do you want to <span className="font-bold">spend</span>{" "}
              each month?
            </label>
            <input
              type="number"
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
              placeholder="833"
              onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                  const newVal = Number((event.target as HTMLInputElement).value);
                  setSpendingAmount(newVal);
                  setEstimatedMonthlyIncomeRemaining(props.monthlyIncome - newVal - bills - savings);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="leading-loose">
              How much do you want to <span className="font-bold">save</span>{" "}
              each month?
            </label>
            <input
              type="number"
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
              placeholder="1000"
              onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                  const newVal = Number((event.target as HTMLInputElement).value);
                  setSavingsAmount(newVal);
                  setEstimatedMonthlyIncomeRemaining(props.monthlyIncome - newVal - spending - bills);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
