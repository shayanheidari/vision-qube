import React from "react";

const ComingSoon = () => {
  return (
    <div className="h-screen w-screen">
      {/* //md:w-[calc(100vw-500px)] md:h-[calc(100vh-200px)] */}
      <div className="flex md:flex-row flex-col w-full h-full bg-white">
        <div className="md:inline-block md:w-[40vw] w-full md:h-full h-[40vh]">
          <div className="hero-pic w-full h-full" />
        </div>
        <div className="flex justify-center items-center md:w-[60vw] w-full h-[60vh] md:h-full pt-10 md:pt-0">
          <div className="px-5 w-[90%] h-[90%] md:h-[70%]">
            <h2 className="tracking-wide font-medium md:text-4xl text-3xl md:pt-10 pb-5">
              It's Coming Soon
              <div className="loader md:h-[50px] h-[30px] inline-block ml-3" />
            </h2>

            <p className="font-light tracking-tight text-justify max-w-[700px] h-[calc(100%-120px)] overflow-y-scroll no-scrollbar">
              VisionQube Ltd is a deep-tech startup pioneering advanced computer
              vision and AI solutions across diverse environments. Our expertise
              encompasses 2D and 3D visual analytics, photogrammetry, remote
              sensing, and precise camera calibration. We develop tailored
              vision systems for applications including environmental
              monitoring, biosecurity, marine habitat analysis, precision
              agriculture, infrastructure inspection, and industrial automation,
              with adaptability to address emerging challenges in other domains.
              Committed to innovation, VisionQube also maintains active
              engagement with the global research community and contributes to
              the advancement of the field through collaboration and knowledge
              exchange.
              <div className="h-2" />
              We are proudly co-organizing and partnering with the Advanced
              Concepts for Intelligent Vision Systems (
              <a
                href="http://www.acivs2025.com"
                className="text-teal-700 active:text-teal-700 active:underline"
              >
                ACIVS
              </a>
              ) conference, taking place in Tokyo, Japan, from 28th to 30th July
              2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
