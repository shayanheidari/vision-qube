import React from "react";
import { CiLinkedin, CiMail } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-screen h-[10vh]">
        <div className="flex px-5 py-3 flex-row w-full h-full ">
          <div className="flex md:w-[40vw] w-full h-full">
            <h1 className="md:text-3xl text-4xl md:text-white md:font-light font-medium">
              <div className="inline-block mb-1 mr-2 h-3 w-3 rounded-lg md:outline-2 outline-3 md:outline-teal-200" />
              Vision Qube Ltd
            </h1>
          </div>
          <div className="hidden md:flex justify-end items-center md:w-[60vw] w-full h-full ">
            <div className="flex justify-between gap-2 text-3xl h-full">
              <CiLinkedin />
              <CiMail />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
