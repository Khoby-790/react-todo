import React, { createContext, useContext, useState } from "react";

const BuilderContext = createContext();

export const useBuilder = () => useContext(BuilderContext);

const BuilderProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [header, setHeader] = useState({
    title: "",
    description: "",
  });

  return (
    <BuilderContext.Provider
      value={{ questions, setQuestions, header, setHeader }}
    >
      {children}
    </BuilderContext.Provider>
  );
};

export default BuilderProvider;
