import React from "react";

const Question = ({ question }) => {
  return (
    <div className="bg-white shadow-md w-full py-8 px-5 my-2 rounded">
      <h1 className="text-2xl font-medium font-mono">{question?.question}</h1>
      {question?.answerType === "Multiple Choice" && (
        <ul>
          {question?.options?.map((ans, ansId) => (
            <li>
              <input type="radio" name={question?.question} value={ans} />
              <label className="ml-3" htmlFor={question?.question}>
                {ans}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Question;
