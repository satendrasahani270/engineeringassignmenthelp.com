import React from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-gray-300 pt-4 pb-2" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1  sm:grid-cols-3 gap-8 mt-5 p-4">
          <div className="lg:mb-0 ">
            <div className="flex items-center ">
              <img
                className="w-[250px]"
                src={"../assets/engineering_logo.webp"}
                alt="Engineering Assignment Help"
              />
            </div>
          </div>

          <div className="contactInfo">
            <h3 className="text-xl font-bold mb-4  text-white">Quick Links</h3>
            <ul className="ml-2 text-xl ">
              <li>
                <Link
                  to="subject"
                  smooth={true}
                  duration={300}
                  className="hover:text-yellow-500 cursor-pointer"
                >
                  Subject
                </Link>
              </li>
              <li>
                <Link
                to="service"
                smooth={true}
                duration={300} className="hover:text-yellow-500 cursor-pointer">
                  Service
                </Link>
              </li>
              <li>
                <Link
                 to="about"
                 smooth={true}
                 duration={300}
                className="hover:text-yellow-500 cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link
                 to="contact"
                 smooth={true}
                 duration={300} className="hover:text-yellow-500 cursor-pointer">

                  Contact-Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="contactInfo">
            <h3 className="text-xl font-bold mb-4 text-left text-white">
              Contact Information
            </h3>
            <div className="text-center">
              <div className="flex gap-4 ">
                <span>
                  <img src={"./assets/call.webp"} alt="Contact me" />
                </span>
                <a
                  className="text-xl max-[320px]:text-[1rem] hover:text-yellow-500"
                  href="tel:+61489921023"
                >
                  +61489921023
                </a>
              </div>
              <div className="flex gap-4 mt-3">
                <span className="w-8">
                  <img
                    width={30}
                    height={30}
                    src={"./assets/email.webp"}
                    alt="Drop email"
                  />
                </span>
                <a
                  className="text-lg max-[320px]:text-[1rem] hover:text-yellow-500"
                  href="mailto:help@engineeringasignhelp.com"
                >
                  help@engineeringasignhelp.com
                </a>
              </div>

              <div className="flex gap-4 mt-3">
                <span className="w-8">
                  <MapPin size={25} />
                </span>
                <a className="text-lg max-[320px]:text-[1rem]">
                  16 Miami Dr,Point Cook VIC 3030 Australia
                </a>
              </div>
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 w-full text-black hover:text-white font-bold py-2 px-4 rounded">
                <a href="tel:+61489921023">Any Query</a>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-2 text-center">
          <p className="m-0 p-3 text-[1.3rem]">
            CopyRight &copy; 2024 Engineering Assignment Help. All rights
            reserved || <br className="hidden max-[480px]:block" />A Brand of{" "}
            <a
              className="bg-slate-900 text-yellow-400 pb-2 pt-1 hover:px-6 hover:rounded-full transition delay-1000 ease-linear rounded-lg px-4"
              target="_blank"
              href="https://www.assignmentwriter.au/"
            >
              Assignment Writer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
