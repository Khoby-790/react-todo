import React from "react";
import { QuestionaireTool } from "../../components";
import Question from "../../components/Question";
import { useBuilder } from "./context/BuilderContext";
import Header from "./Header";

const Builder = () => {
  const { questions } = useBuilder();
  return (
    <div className="flex flex-col max-h-full h-full flex-1 py-5">
      <div className="flex">
        <div className="flex-1 px-2 h-full">
          <QuestionaireTool />
        </div>
        <form className="flex-1 max-h-full h-full px-2">
          <Header />
          <div className="flex items-start w-full flex-col">
            {questions.map((question, questionId) => (
              <Question key={questionId} question={question} />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Builder;
