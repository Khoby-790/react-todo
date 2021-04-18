import React from "react";
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsSearch} from 'react-icons/bs';


const Navbar = () => {
  return (
    <div className="bg-white py-5 flex justify-between items-center shadow-md">
      <div className="w-1/4 flex px-4">
        <span className="mr-5">
          <GiHamburgerMenu className="text-gray-500" size={30} />
        </span>
        <span className="text-xl">Form Builder</span>
      </div>
      <div className="flex-1">
        <div className="bg-gray-300 w-full flex  py-2 px-4  rounded-lg overflow-hidden">
          <div>
              <BsSearch className="text-gray-500" size={30} />
          </div>
          <input className="bg-gray-300 flex-1 ml-3 outline-none" type="text" />
        </div>
      </div>
      <div className="w-1/4"></div>
    </div>
  );
};

export default Navbar;
