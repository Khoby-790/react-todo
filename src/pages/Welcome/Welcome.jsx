import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex-1 h-full flex flex-col">
      <div className="bg-gray-200 h-auto py-5 flex flex-col px-32">
        <div className="flex justify-between">
          <span className="text-xl font-mono text-gray-500">
            Start a new form
          </span>
          <div className="flex items-center">
            <button className="outline-none focus:outline-none transition-all duration-100 transform rounded border border-gray-500 px-3 py-2 hover:bg-gray-600 hover:text-white">
              Temlate gallery
            </button>

            <button className="transition-all duration-100 transform ml-4 px-3 py-2 group rounded outline-none hover:text-white focus:outline-none hover:bg-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 text-gray-500 group-hover:text-gray-100 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid gap-3 grid-cols-6">
          <Link to="/builder" className="cursor-pointer ">
            <div className="bg-white flex items-center h-40 mb-3 justify-center flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <span>Blank</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
