import React from "react";
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className="bg-white py-5 flex justify-between items-center shadow-md">
      <div className="w-1/4 flex px-4">
        <span className="mr-5">
          <GiHamburgerMenu size={30} />
        </span>
        <span className="text-xl">Form Builder</span>
      </div>
      <div className="flex-1">
        <div className="bg-gray-300 w-full flex  rounded-md overflow-hidden">
          <div></div>
          <input type="text" />
        </div>
      </div>
      <div className="w-1/4"></div>
    </div>
  );
};

export default Navbar;
