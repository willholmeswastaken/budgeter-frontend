import React from "react";

export const Controls: React.FC = () => {
  return (
    <div className="pt-4 flex items-center space-x-4">
      <button className="flex justify-center items-center text-lg font-semibold bg-gray-400 hover:bg-gray-500 transition-colors w-full text-white px-4 py-2 rounded-md focus:outline-none">
        <svg
          className="w-6 h-6 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>{" "}
        Cancel
      </button>
      <button className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
        Create
      </button>
    </div>
  );
};
