import React, { useMemo, useState } from "react";

const Question = ({
  question,
  nextStep,
  currentStep,
  previousStep,
  totalSteps,
}) => {
  const [answer, setAnswer] = useState("");
  const requiredAndAnswered = useMemo(() => {
    if (!question?.required) {
      return true;
    }
    if (question?.required && answer) {
      return true;
    }

    return false;
  }, [question, answer]);

  return (
    <div className="bg-white shadow-md w-full max-h-full flex-1 py-8 px-5 my-2 rounded">
      <div className="h-96">
        <h1 className="text-2xl font-medium font-mono">{question?.question}</h1>
        {question?.answerType === "Multiple Choice" && (
          <ul>
            {question?.options?.map((ans, ansId) => (
              <li>
                <input
                  checked={answer === ans}
                  onChange={(e) => setAnswer(e.target.value)}
                  type="radio"
                  name={question?.question}
                  value={ans}
                />
                <label className="ml-3" htmlFor={question?.question}>
                  {ans}
                </label>
              </li>
            ))}
          </ul>
        )}

        {question?.answerType === "Short answer" && (
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full bg-gray-200 h-12 my-5 outline-none focus:outline-none px-4 font-medium"
          />
        )}

        {question?.answerType === "Paragraph" && (
          <textarea
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full bg-gray-200 my-5 outline-none focus:outline-none px-4 font-medium"
          />
        )}
      </div>
      <div className="flex justify-between">
        <button
          onClick={currentStep > 1 ? previousStep : () => {}}
          className="bg-gray-500 px-2 py-2 rounded outline-none focus:outline-none text-white"
        >
          Prev
        </button>
        <button
          disabled={!requiredAndAnswered}
          onClick={() => nextStep()}
          className={`bg-${
            requiredAndAnswered ? "green" : "gray"
          }-500 px-2 py-2  rounded outline-none focus:outline-none text-white`}
        >
          {currentStep === totalSteps ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Question;
