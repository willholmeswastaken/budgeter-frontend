import React from "react";
import Image from "next/image";

export const Initial: React.FC = () => (
  <div className="max-w-md mx-auto animate__animated animate__fadeIn">
    <div className="flex items-center space-x-5">
      <div>
        <Image
          src="/budgeter-logo.png"
          alt="Budgeter logo"
          height={75}
          width={100}
          className="object-contain md:object-scale-down"
        />
      </div>
      <div className="block font-semibold text-xl self-start text-gray-700">
        <h2 className="leading-relaxed">Create your profile</h2>
        <p className="text-sm text-gray-500 font-normal leading-relaxed">
          Let's get to know you better!
        </p>
      </div>
    </div>
    <div className="divide-y divide-gray-200">
      <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <div className="flex flex-col">
          <label className="leading-loose">Your name</label>
          <input
            type="text"
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
            placeholder="Enter name..."
          />
        </div>
        <div className="flex flex-col">
          <label className="leading-loose">Your email</label>
          <input
            type="text"
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
            placeholder="Enter email..."
          />
        </div>
        <div className="flex flex-col">
          <label className="leading-loose">Your password</label>
          <input
            type="password"
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
            placeholder="Enter password..."
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col">
            <label className="leading-loose">Monthly Income:</label>
            <div className="relative focus-within:text-gray-600 text-gray-400">
              <input
                type="text"
                className="pr-4 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                placeholder="25000"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="leading-loose">Monthly Payday:</label>
            <div className="relative focus-within:text-gray-600 text-gray-400">
              <input
                type="text"
                className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                placeholder="26/02/2020"
              />
              <div className="absolute left-3 top-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Initial;
