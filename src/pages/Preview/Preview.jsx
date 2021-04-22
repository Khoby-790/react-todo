import React from "react";
import StepWizard from "react-step-wizard";
import Question from "../../components/Question";
import { useBuilder } from "../Builder/context/BuilderContext";
import Header from "../Builder/Header";

const Preview = () => {
  const { questions } = useBuilder();
  return (
    <div className="h-screen px-36 py-8 w-screen justify-center items-center bg-green-500">
      <Header preview />
      <StepWizard>
        {questions?.map((question, qId) => (
          <Question key={qId} question={question} />
        ))}
      </StepWizard>
    </div>
  );
};

export default Preview;
