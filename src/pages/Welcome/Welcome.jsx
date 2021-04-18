import React from "react";

const Welcome = () => {
  return (
    <div className="flex-1 h-full flex flex-col">
      <div className="bg-gray-300 h-64 py-5 flex flex-col px-32">
        <div className="flex justify-between">
          <span>Start a new form</span>
          <div className="flex items-center">
            <button className="outline-none focus:outline-none transition-all duration-100 transform rounded border border-gray-500 px-3 py-2 hover:bg-gray-600 hover:text-white">Temlate gallery</button>

            <button className="transition-all duration-100 transform ml-4 px-3 py-2 group rounded outline-none hover:text-white hover:bg-gray-500 focus:bg-gray-500">
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
      </div>
    </div>
  );
};

export default Welcome;
