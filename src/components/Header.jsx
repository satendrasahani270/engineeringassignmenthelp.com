import React, { useState } from "react";
import logo from "/assets/engineering_logo.webp";
import { Link } from "react-scroll";
const Header = ({ activeComponent, setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const displayTab = () => {
    setIsOpen(false);
  };
  return (
    <header className="px-10 lg:px-0 bg-slate-600 w-full sticky top-0 z-50">
      <nav className="flex justify-between items-center py-3 lg:max-w-[85%] mx-auto">
        <div>
          <a href="/">
            <img
              className="w-[200px] max-[768px]:w-[150px]"
              src={logo}
              alt="Engineering Assignment Help"
            />
          </a>
        </div>
        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="text-black">
            <svg
              className="w-6 h-6"
              style={{ color: "#fff" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          onClick={displayTab}
          className={`lg:flex gap-1 ${
            isOpen ? "block" : "hidden"
          } absolute lg:relative lg:flex-row flex-col text-white w-full lg:w-auto sm:top-[3.2rem] top-[2.8rem] left-0 lg:top-0 lg:left-0 rounded-b-[2rem] max-[768px]:shadow-2xl max-[768px]:bg-slate-700`}
        >
          <li className="h-10 px-6 font-semibold rounded-md   pt-1 cursor-pointer">
            <a href="/" smooth={true} duration={300}>
              Home
            </a>
          </li>
          <li className="h-10 px-6 font-semibold rounded-md   pt-1 cursor-pointer">
            <Link
              to="subject"
              smooth={true}
              duration={300}
              onClick={() => setActiveComponent("subject")}
            >
              Subject
            </Link>
          </li>
          <li className="h-10 px-6 font-semibold rounded-md   pt-1 cursor-pointer">
            <Link
              to="service"
              smooth={true}
              duration={300}
              onClick={() => setActiveComponent("service")}
            >
              Service
            </Link>
          </li>
          <li className="h-10 px-6 font-semibold rounded-md   pt-1 cursor-pointer">
            <Link to="about" smooth={true} duration={300}>
              About
            </Link>
          </li>
          <li className="h-10 px-6 font-semibold rounded-md   pt-1 cursor-pointer">
            <Link to="contact" smooth={true} duration={300}>
              Contact-us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
