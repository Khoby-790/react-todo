/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ArchiveIcon,
  ArrowCircleRightIcon,
  ChevronDownIcon,
  DuplicateIcon,
  HeartIcon,
  PencilAltIcon,
  TrashIcon,
  UserAddIcon,
} from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const QuestionaireTool = () => {
  return (
    <div className="w-full lg:w-2/3 border-l-8 border-indigo-500 py-5 px-2 shadow-lg bg-gray-50 my-3 rounded-lg ">
      {/* Question and Question Type section */}
      <div className="flex px-4">
        <div className="flex-1">
          <textarea
            name=""
            id=""
            placeholder="Question"
            className="w-full outline-none focus:bg-gray-300 placeholder-gray-500 text-xl py-3 px-3 focus:border-indigo-500 border-b-4"
          ></textarea>
        </div>
        <div className="ml-2">
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    Options
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
                          <a
                            href="#"
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
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
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
                            Duplicate
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
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
                            Archive
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <ArrowCircleRightIcon
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            Move
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <UserAddIcon
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            Share
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <HeartIcon
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            Add to favorites
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "group flex items-center px-4 py-2 text-sm"
                            )}
                          >
                            <TrashIcon
                              className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            Delete
                          </a>
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
      {/* Answers Section */}
      <div className="p-3"></div>

      {/* Settings Section */}
      <div className="border-t flex justify-end border-gray-300">
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default QuestionaireTool;
