import React from "react";

const Question = ({ question }) => {
  return (
    <div className="bg-white shadow-md w-full py-8 px-2 my-2 rounded">
      <h1 className="text-2xl font-medium font-mono">{question?.question}</h1>

    </div>
  );
};

export default Question;
