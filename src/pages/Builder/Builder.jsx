import React from "react";

const Builder = () => {
  return (
    <div className="flex justify-center py-5">
      <div className="bg-white px-4 flex flex-col shadow rounded border-t-8 border-indigo-700 py-3 w-2/3">
        <div className="flex-1">
          <input
            type="text"
            className="text-3xl w-full outline-none py-2 px-3 flex-1 font-bold"
            placeholder="Form Title"
          />
        </div>
        <div>
          <textarea type="text" placeholder="Form Description" className="text-gray-500 w-full px-3 outline-none py-2" />
        </div>
      </div>
    </div>
  );
};

export default Builder;
