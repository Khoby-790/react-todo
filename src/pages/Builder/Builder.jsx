import React from "react";
import { QuestionaireTool } from "../../components";
import Question from "../../components/Question";
import { useBuilder } from "./context/BuilderContext";
import Header from "./Header";

const Builder = () => {
  const { questions } = useBuilder();
  return (
    <div className="flex flex-col items-center py-5">
      <Header />
      <div className="flex items-start w-2/3 flex-col">
        {questions.map((question, questionId) => (
          <Question key={questionId} question={question} />
        ))}
      </div>
      <QuestionaireTool />
    </div>
  );
};

export default Builder;
