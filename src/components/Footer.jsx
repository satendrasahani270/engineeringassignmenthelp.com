import React from "react";
import { MapPin } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

// Custom link that conditionally uses react-scroll if on home page
const ConditionalScrollLink = ({ to, children, ...props }) => {
  const location = useLocation();
  // If already on the home page, use react-scroll for smooth scrolling
  if (location.pathname === "/") {
    return (
      <ScrollLink
        to={to}
        smooth={true}
        duration={300}
        className="hover:text-yellow-500 cursor-pointer"
        {...props}
      >
        {children}
      </ScrollLink>
    );
  } else {
    // Otherwise, navigate to the home page with the hash.
    return (
      <RouterLink
        to={`/#${to}`}
        className="hover:text-yellow-500 cursor-pointer"
        {...props}
      >
        {children}
      </RouterLink>
    );
  }
};

// Social media icons
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="hover:scale-110 transition-transform duration-300"
  >
    <defs>
      <radialGradient id="instagram-gradient" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      fill="url(#instagram-gradient)"
    />
    <rect
      x="6"
      y="6"
      width="12"
      height="12"
      rx="3"
      fill="none"
      stroke="white"
    />
    <circle cx="12" cy="12" r="3" fill="none" stroke="white" />
    <circle cx="16.5" cy="7.5" r="1.5" fill="white" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    className="hover:scale-110 transition-transform duration-300"
  >
    <rect width="24" height="24" rx="2" fill="#0A66C2" />
    <path
      d="M6.5 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-3 15h3v-9h-3v9zm5.5 0h3v-4.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5v4.5h3v-5c0-3-2-4.5-4.5-4.5-1.5 0-2.5.5-3 1.5v-1h-3v9z"
      fill="white"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    className="hover:scale-110 transition-transform duration-300"
  >
    <rect width="24" height="24" rx="12" fill="#1877F2" />
    <path
      d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73z"
      fill="white"
    />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    className="hover:scale-110 transition-transform duration-300"
  >
    <rect width="24" height="24" rx="6" fill="#FF0000" />
    <path
      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
      fill="white"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-gray-300 pt-4 pb-2" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-5 p-4">
          <div className="lg:mb-0">
            <div className="flex items-center">
              <img
                className="w-[250px]"
                src={"/assets/engineering_logo.webp"}
                alt="Engineering Assignment Help"
              />
            </div>
          </div>

          <div className="contactInfo">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="ml-2 text-xl">
              <li>
                <ConditionalScrollLink to="subject">
                  Subject
                </ConditionalScrollLink>
              </li>
              <li>
                <ConditionalScrollLink to="service">
                  Service
                </ConditionalScrollLink>
              </li>
              <li>
                <RouterLink
                  to="/contact"
                  className="hover:text-yellow-500 cursor-pointer"
                >
                  Contact Us
                </RouterLink>
              </li>
            </ul>
          </div>

          <div className="contactInfo">
            <h3 className="text-xl font-bold mb-4 text-left text-white">
              Contact Information
            </h3>
            <div className="text-center">
              <div className="flex gap-4">
                <span>
                  <img src={"/assets/call.webp"} alt="Contact me" />
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
                    src={"/assets/email.webp"}
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
                <span className="text-lg max-[320px]:text-[1rem]">
                  16 Miami Dr, Point Cook VIC 3030 Australia
                </span>
              </div>
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 w-full text-black hover:text-white font-bold py-2 px-4 rounded">
                <a href="https://wa.me/61489921023">Any Query</a>
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-6 py-6 border-t border-gray-500 mt-8">
          <a
            href="https://www.instagram.com/clickinpedia.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <InstagramIcon />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/company/clickinpediaio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <LinkedInIcon />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://www.facebook.com/247Asignmenthelp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <FacebookIcon />
            <span className="sr-only">Facebook</span>
          </a>
          <a
            href="https://www.youtube.com/@Clickinpedia._io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <YoutubeIcon />
            <span className="sr-only">YouTube</span>
          </a>
        </div>

        <div className="mt-5 pt-2 text-center">
          <p className="m-0 p-3 text-[1.3rem]">
            CopyRight &copy; 2024 Engineering Assignment Help. All rights
            reserved || <br className="hidden max-[480px]:block" />A Brand of{" "}
            <a
              className="bg-slate-900 text-yellow-400 pb-2 pt-1 hover:px-6 hover:rounded-full transition delay-1000 ease-linear rounded-lg px-4"
              target="_blank"
              rel="noopener noreferrer"
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
