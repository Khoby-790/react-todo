/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";
import { Menu, Transition, Switch } from "@headlessui/react";
import {
  ArchiveIcon,
  ChevronDownIcon,
  DuplicateIcon,
  PencilAltIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";
import { useBuilder } from "../pages/Builder/context/BuilderContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const QuestionaireTool = () => {
  const [enabled, setEnabled] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [answerType, setAnswerType] = useState("Multiple Choice");
  const [options, setOptions] = useState(["Option 1"]);
  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const { setQuestions } = useBuilder();

  const removeOption = (id) => {
    const _options = [...options];
    _options.splice(id, 1);
    console.log(_options);
    setOptions(_options);
  };

  const editOption = (value, id) => {
    const _options = [...options];
    _options[id] = value;
    setOptions(_options);
  };

  const addQuestion = () => {
    if (!question) return;
    if (answerType === "Multiple Choice" && options.length < 1) return;
    const data = {
      question,
      answerType,
      options,
      required: enabled,
    };
    setQuestion("");
    setAnswerType("Multiple Choice");
    setOptions(["Option 1"]);
    setShowDescription(false);
    setEnabled(false);
    setQuestions((prev) => [...prev, data]);
  };

  return (
    <Fragment>
      <div className="w-full lg:w-2/3 border-l-8 border-indigo-500 pt-5 px-2 shadow-lg bg-gray-50 my-3 rounded-lg ">
        {/* Question and Question Type section */}
        <div className="flex">
          <div className="flex-1">
            <textarea
              name=""
              id=""
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Question"
              className="w-full outline-none bg-transparent focus:bg-gray-300 placeholder-gray-500 text-xl py-3 px-3 focus:border-indigo-500 border-b-4"
            ></textarea>
          </div>
          <div className="ml-2">
            <Menu as="div" className="relative inline-block z-10 text-left">
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                      {answerType}
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                    >
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              onClick={() => setAnswerType("Multiple Choice")}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "group flex items-center px-4 py-2 text-sm"
                              )}
                            >
                              <PencilAltIcon
                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              Multiple Choice
                            </span>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              onClick={() => setAnswerType("Short answer")}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "group flex items-center px-4 py-2 text-sm"
                              )}
                            >
                              <DuplicateIcon
                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              Short answer
                            </span>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              onClick={() => setAnswerType("Paragraph")}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "group flex items-center px-4 py-2 text-sm"
                              )}
                            >
                              <ArchiveIcon
                                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              Paragraph
                            </span>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
        {/* Description Section */}
        {showDescription && (
          <input
            rows={4}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="text-gray-500 bg-transparent w-full px-3 border-b outline-none py-2"
          />
        )}
        {/* Answers Section */}
        <div className="p-3">
          {answerType === "Paragraph" && (
            <div className="border-b w-full">{answerType}</div>
          )}
          {answerType === "Short answer" && (
            <div className="border-b">{answerType}</div>
          )}

          {answerType === "Multiple Choice" && (
            <div>
              {options.map((option, optionId) => (
                <div className="w-full flex" key={optionId}>
                  <span className="mr-4 font-bold text-lg">{optionId + 1}</span>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => editOption(e.target.value, optionId)}
                    className="w-full py-2 outline-none bg-transparent border-b"
                  />
                  <span
                    onClick={() => removeOption(optionId)}
                    className="text-red-600 cursor-pointer"
                  >
                    Remove
                  </span>
                </div>
              ))}
              <button
                onClick={() =>
                  setOptions((prev) => [
                    ...prev,
                    `Option ${options.length + 1}`,
                  ])
                }
                className="my-3 px-4 py-2 rounded-md w-auto outline-none focus:outline-none bg-indigo-600 text-white"
              >
                Add option
              </button>
            </div>
          )}
        </div>

        {/* Settings Section */}
        <div className="border-t flex justify-end py-4 px-4 border-gray-300">
          <div className="flex p-2 border-r">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-3 text-gray-500 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
          <div className="flex items-center">
            <Switch.Group as="div" className="flex items-center mr-3">
              <Switch.Label as="span" className="ml-3">
                <span className="text-sm font-medium mr-2 text-gray-900">
                  Required
                </span>
              </Switch.Label>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={classNames(
                  enabled ? "bg-indigo-600" : "bg-gray-200",
                  "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                )}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    enabled ? "translate-x-5" : "translate-x-0",
                    "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  )}
                />
              </Switch>
            </Switch.Group>

            <Menu as="div" className="relative inline-block text-left">
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className="bg-gray-100 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                      <span className="sr-only">Open options</span>
                      <DotsVerticalIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={() =>
                                setShowDescription((prev) => !prev)
                              }
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Description
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Support
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              License
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full text-left px-4 py-2 text-sm"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>

      <div className="p-3 bg-white shadow-lg w-1/3">
        <div className="">
          <button
            onClick={addQuestion}
            className="bg-green-500 outline-none p-3 rounded text-white font-bold focus:outline-none"
          >
            Next Question
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default QuestionaireTool;
