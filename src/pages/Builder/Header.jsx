import React from "react";
import { useBuilder } from "./context/BuilderContext";

const Header = ({ preview }) => {
  const { header, setHeader } = useBuilder();
  return (
    <div className="bg-white px-4 flex flex-col shadow rounded border-t-8 border-indigo-700 py-3 w-full">
      <div className="flex-1">
        {preview && <h1>{header?.title}</h1>}
        {!preview && (
          <input
            type="text"
            className="text-3xl w-full outline-none py-2 px-3 flex-1 font-bold"
            placeholder="Form Title"
            value={header.title}
            onChange={(e) =>
              setHeader((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />
        )}
      </div>
      <div className="mx-h-40">
        {preview && <p>{header?.description}</p>}
        {!preview && (
          <textarea
            rows={4}
            type="text"
            value={header.description}
            placeholder="Form Description"
            className="text-gray-500 w-full px-3 outline-none py-2"
            onChange={(e) =>
              setHeader((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          />
        )}
      </div>
    </div>
  );
};

export default Header;
