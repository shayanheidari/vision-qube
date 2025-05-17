import React from "react";

const ComingSoon = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-row w-full h-full">
        <div className="hidden md:inline-block w-[40vw] h-full">
          <div className="hero-pic w-full h-full" />
        </div>
        <div className="flex justify-center items-center md:w-[60vw] w-full h-full">
          <div className="px-5 w-[90%] h-[90%] md:h-[70%]">
            <h2 className="font-semibold text-3xl pt-10 pb-5">Comming Soon</h2>
            <div className="loader" />
            <p className="font-light text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              eligendi tenetur voluptas ducimus animi a quibusdam reprehenderit
              debitis. Voluptatem, animi nam? Sequi neque obcaecati tenetur,
              sunt cupiditate alias assumenda minima! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Molestias, distinctio tempora. Odio
              suscipit harum nesciunt iure vero recusandae distinctio ipsam
              excepturi. Ipsum modi exercitationem ex ullam, pariatur nam
              corrupti? Id? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Provident saepe beatae adipisci eum, quaerat vel non
              accusamus optio inventore eos, nostrum fugiat officia deleniti!
              Non saepe exercitationem sunt a iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
