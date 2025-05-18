import React from "react";
import { CiLinkedin, CiMail } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-screen h-[10vh]">
        <div className="flex px-5 py-3 flex-row w-full h-full ">
          <div className="flex md:w-[40vw] w-full h-full">
            <h1 className="md:text-6xl text-4xl text-white md:font-light font-medium">
              <div className="inline-block mb-1 md:mb-2 md:mr-4 mr-3 md:h-7 h-3 md:w-7 w-3 rounded-3xl md:outline-3 outline-3 outline-teal-200" />
              VisionQubeLtd
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
