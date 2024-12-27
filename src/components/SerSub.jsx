import React, { useEffect, useState } from "react";
import Services from "./Services";
import Subject from "./Subject";
import { Link } from "react-router-dom";

const SerSub = () => {
  const [isService, setIsSercvice] = useState(false);
  const location = window.location;

  useEffect(() => {
    setIsSercvice(location.hash == "#service");
  }, [location]);
  return (
    <div className="relative max-[1570px]:px-8 SerSub" id="subject">
      <div className="flex text-2xl justify-center py-4" id="service">
        <Link to={"#subject"}>
          <div
            className={`bg-gray-200 p-2 rounded-md font-semibold font-sans cursor-pointer ${
              !isService ? "bg-gray-600 text-white px-4" : "hover:bg-gray-400"
            }`}
            onClick={() => setIsSercvice(!isService)}
          >
            Subject
          </div>
        </Link>
        <Link to={"#service"}>
          <div
            className={`bg-gray-200 p-2 rounded-md font-semibold font-sans cursor-pointer ${
              isService ? "bg-gray-600 text-white px-4" : "hover:bg-gray-400"
            }`}
            onClick={() => setIsSercvice(!isService)}
          >
            Service
          </div>
        </Link>
      </div>

      <div>
        {isService && <Services />}
        {!isService && <Subject />}
      </div>
    </div>
  );
};

export default SerSub;
