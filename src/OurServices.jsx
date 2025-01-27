import React from "react";

const OurServices = () => {
  return (
    <div
      className=" our-services flex items-center justify-center py-[4rem] bg-gray-100"
      style={{ background: "#5ac142e8" }}
    >
      <div className="xxl:w-[70%] xl:w-[80%]  lg:flex lg:justify-between lg:ps-4 grid grid-cols-2 md:gap-8 w-full mx-8 max-[480px]:gap-y-10">
        <div className="sm:flex gap-4">
          <img
            width={50}
            src={"/assets/comments-regular.webp"}
            alt="experienced-writers"
          />
          <span>
            Expericnced <br /> Writers
          </span>
        </div>
        <div className="sm:flex gap-4">
          <img
            width={50}
            src={"/assets/user-graduate-solid.webp"}
            alt="experienced-writers"
          />
          <span>
            100% Safe & <br /> confidential
          </span>
        </div>
        <div className="sm:flex gap-4">
          <img
            width={50}
            src={"/assets/circle-play-regular.webp"}
            alt="experienced-writers"
          />
          <span>
            100% Plagiarism <br /> Free
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
