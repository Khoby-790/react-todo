import React from "react";
import { QuestionaireTool } from "../../components";
import Question from "../../components/Question";
import { useBuilder } from "./context/BuilderContext";
import Header from "./Header";
import StepWizard from "react-step-wizard";

const Builder = () => {
  const { questions } = useBuilder();
  return (
    <div className="flex flex-col max-h-full h-full flex-1 py-5">
      <div className="flex">
        <div className="flex-1 px-2 h-full z-10">
          <QuestionaireTool />
        </div>
        <div className="flex-1 max-h-full h-full w-full px-2">
          <Header />
          <StepWizard className="flex max-h-full w-full flex-col">
            {questions.map((question, questionId) => (
              <Question key={questionId} question={question} />
            ))}
          </StepWizard>
        </div>
      </div>
    </div>
  );
};

export default Builder;
