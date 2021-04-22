import React from "react";
import BuilderProvider from "../Builder/context/BuilderContext";
import Preview from "./Preview";

export const PreviewWrapper = () => {
  return (
    <BuilderProvider>
      <Preview />
    </BuilderProvider>
  );
};
