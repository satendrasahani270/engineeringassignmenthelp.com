import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const ConditionalScrollLink = ({ to, children, ...props }) => {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <ScrollLink
        to={to}
        smooth={true}
        duration={300}
        className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
        {...props}
      >
        {children}
      </ScrollLink>
    );
  }
  return (
    <RouterLink
      to={`/#${to}`}
      className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
      {...props}
    >
      {children}
    </RouterLink>
  );
};

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-slate-700 p-3 rounded-full hover:bg-yellow-500 transition-all duration-300 group"
  >
    {children}
  </a>
);

const ContactCard = () => (
  <div className="bg-slate-800 rounded-xl p-6 space-y-6 max-w-md">
    <h3 className="text-2xl font-bold text-white">Contact Information</h3>

    <div className="space-y-5">
      <a
        href="tel:+61489921023"
        className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
      >
        <Phone className="w-6 h-6 text-yellow-400 flex-shrink-0" />
        <span className="text-lg">+61489921023</span>
      </a>

      <a
        href="mailto:help@engineeringasignhelp.com"
        className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
      >
        <Mail className="w-6 h-6 text-yellow-400 flex-shrink-0" />
        <span className="text-lg break-all">help@engineeringasignhelp.com</span>
      </a>

      <div className="flex items-start gap-3">
        <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
        <span className="text-lg text-gray-300">
          16 Miami Dr, Point Cook
          <br />
          VIC 3030 Australia
        </span>
      </div>
    </div>

    <a
      href="tel:+61489921023"
      className="block w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 text-center py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
    >
      Any Query
    </a>
  </div>
);

const Footer = () => {
  const subjectLinks = [
    {
      name: "Assessment help",
      url: "https://www.assignmentwriters.au/assessment-help",
    },
    { name: "Essay help", url: "https://www.assignmentwriters.au/essay-help" },
    {
      name: "Thesis help",
      url: "https://www.assignmentwriters.au/thesis-help",
    },
    {
      name: "Case study help",
      url: "https://www.assignmentwriters.au/case-study-help",
    },
    { name: "Paper help", url: "https://www.assignmentwriters.au/" },
    {
      name: "Research proposal",
      url: "https://www.assignmentwriters.au/research-proposal-help",
    },
    {
      name: "Dissertation help",
      url: "https://www.assignmentwriters.au/dissertation-help",
    },
    { name: "Term paper", url: "https://www.assignmentwriters.au/" },
    { name: "Report writing help", url: "https://www.assignmentwriters.au/" },
    {
      name: "Coursework help",
      url: "https://www.assignmentwriters.au/coursework-help",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-12">
          {/* Logo and Contact Section */}
          <div className="lg:col-span-4">
            <img
              className="w-[200px] mb-8"
              src="/assets/engineering_logo.webp"
              alt="Engineering Assignment Help"
            />
            <ContactCard />
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
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
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Contact Us
                </RouterLink>
              </li>
            </ul>
          </div>

          {/* Subjects Section */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold text-white mb-6">Subjects</h3>
            <ul className="space-y-3">
              {subjectLinks.map((link) => (
                <li key={link.name}>
                  <RouterLink
                    to={link.url}
                    className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-yellow-400" />
                    <span>{link.name}</span>
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Assignment Help Section */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold text-white mb-6">
              Assignment Help
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Assignment Help",
                  url: "https://www.assignmentwriters.au/assessment-help",
                },
                {
                  name: "Accounting Assignment Help",
                  url: "https://www.assignmentwriters.au/accounting-assignment-help",
                },
                {
                  name: "Management Assignment Help",
                  url: "https://www.assignmentwriters.au/management-assignment-help",
                },
                {
                  name: "Nursing Assignment Help",
                  url: "https://www.assignmentwriters.au/nursing-assignment-help",
                },
                {
                  name: "Programming Assignment Help",
                  url: "https://www.assignmentwriters.au/computer-science-assignment-help",
                },
                {
                  name: "Marketing Assignment Help",
                  url: "https://www.assignmentwriters.au/marketing-assignment-help",
                },
                {
                  name: "Law Assignment Help",
                  url: "https://www.assignmentwriters.au/law-assignment-help",
                },
                {
                  name: "Engineering Assignment Help",
                  url: "https://www.assignmentwriters.au/engineering-assignment-help",
                },
              ].map((link) => (
                <li key={link.name}>
                  <RouterLink
                    to={link.url}
                    className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-yellow-400" />
                    <span>{link.name}</span>
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-slate-700/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <SocialIcon href="https://www.instagram.com/clickinpedia.io">
                <svg
                  className="w-5 h-5 text-white group-hover:text-slate-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/clickinpediaio">
                <svg
                  className="w-5 h-5 text-white group-hover:text-slate-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/247Asignmenthelp">
                <svg
                  className="w-5 h-5 text-white group-hover:text-slate-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/@Clickinpedia._io">
                <svg
                  className="w-5 h-5 text-white group-hover:text-slate-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </SocialIcon>
            </div>
            <p className="text-center md:text-left text-sm">
              Copyright © {new Date().getFullYear()} Engineering Assignment
              Help. All rights reserved |{" "}
              <span className="whitespace-nowrap">
                A Brand of{" "}
                <a
                  href="https://www.assignmentwriters.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-slate-900 px-3 py-1 rounded-full hover:bg-yellow-400 transition-colors duration-300 font-medium"
                >
                  Assignment Writer
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
