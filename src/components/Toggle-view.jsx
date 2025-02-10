"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const subjects = [
  {
    head: "Electrical Engineering Assignment Help",
    para: "Electrical engineering involves the study of electrical circuits, power systems, and electronics. Many students struggle with the complex mathematical calculations and theoretical concepts involved. Our <b>engineering assignment writers</b> are here to help you with all aspects of electrical engineering, providing clear and accurate solutions that meet your academic requirements.",
  },
  {
    head: "Civil Engineering Assignment Help",
    para: "Civil engineering encompasses topics like structural analysis, construction management, and geotechnics. These subjects require a deep understanding of material properties, environmental considerations, and project planning. Our <b>engineering assignment help</b> services ensure that students receive the guidance they need to excel in these areas, with detailed and well-organized assignments delivered on time.",
  },
  {
    head: "Chemical Engineering Assignment Help",
    para: "Chemical engineering deals with chemical reactions, process design, and the development of new materials. Students often find it challenging to balance the theoretical and practical aspects of this field. Our <b>engineering assignment writers</b> are experienced in providing precise and well-researched solutions, helping you navigate the complexities of chemical engineering assignments",
  },
  {
    head: "Mechanical Engineering Assignment Help",
    para: "Mechanical engineering covers a wide range of topics, including thermodynamics, machine design, and fluid mechanics. These subjects require a strong understanding of physical principles and mathematical modeling. Our <b>engineering assignment help</b> services are tailored to assist students in mastering these topics, ensuring that you can complete your assignments with ease.",
  },
  {
    head: "Software Engineering Assignment Help",
    para: "Software engineering involves programming, software development, and system design. Students often face challenges in coding, debugging, and understanding complex algorithms. Our <b>engineering assignment writers</b> offer expert help in these areas, providing clear explanations and working code that meets your assignment criteria.",
  },
  {
    head: "Aerospace Engineering Assignment Help",
    para: "Aerospace engineering is a specialized field focusing on aircraft and spacecraft design, propulsion systems, and aerodynamics. The technical nature of this discipline can be overwhelming for students. Our <b>engineering assignment writing services</b> provide in-depth support, helping you excel in your aerospace engineering studies.",
  },
  {
    head: "Computer Engineering Assignment Help",
    para: "Computer engineering combines electrical engineering and computer science to develop computer systems and networks. Students often find it difficult to grasp the intricacies of computer architecture, data communication, and networking. Our <b>engineering assignment writers</b> are well-versed in these topics, offering comprehensive assistance to ensure your academic success.",
  },
  {
    head: "Electronics Engineering Assignment Help",
    para: "Electronics engineering involves the study of electronic circuits, signal processing, and communication systems. The complexity of these topics can pose significant challenges for students. Our <b>engineering assignment writing services</b> provide clear and concise solutions, helping you understand and complete your assignments effectively.",
  },
  {
    head: "Biomedical Engineering Assignment Help",
    para: "Biomedical engineering applies engineering principles to the medical field, covering topics like medical devices, biomechanics, and tissue engineering. Students may struggle with the interdisciplinary nature of this field. Our <b>engineering assignment writers</b> offer expert help, ensuring that you can confidently tackle your biomedical engineering assignments.",
  },
  {
    head: "Environmental Engineering Assignment Help",
    para: "Environmental engineering focuses on environmental protection, waste management, and sustainable development. Students often face challenges in understanding the environmental regulations and technical processes involved. Our <b>engineering assignment help services</b> provide thorough support, helping you produce well-researched and impactful assignments.",
  },
  {
    head: "Geotechnical Engineering Assignment Help",
    para: "Geotechnical engineering involves the study of soil mechanics, foundation design, and earth structures. The technical and analytical nature of this subject can be challenging for students. Our <b>engineering assignment writers</b> provide expert assistance, helping you navigate the complexities of geotechnical engineering.",
  },
  {
    head: "Petroleum Engineering Assignment Help",
    para: "Petroleum engineering focuses on the exploration and production of oil and gas. Topics like drilling, reservoir engineering, and production technology are central to this field. Our <b>engineering assignment writing services</b> ensure that you receive the expert guidance needed to excel in your petroleum engineering assignments.",
  },
  {
    head: "Structural Engineering Assignment Help",
    para: "Structural engineering is a branch of civil engineering that deals with the design and analysis of structures like buildings and bridges. Students often struggle with the detailed calculations and safety considerations involved. Our <b>engineering assignment writers</b> provide detailed and accurate solutions, helping you achieve success in your structural engineering studies.",
  },
];

const services = [
  {
    head: "Essay Help",
    para: "Writing an engineering essay requires a clear understanding of technical concepts and the ability to articulate them effectively. Our <b>help with engineering assignment</b> service ensures that your essays are well-structured, logically organized, and supported by relevant evidence. Our <b>engineering assignment writers</b> are skilled at presenting complex ideas in a coherent manner, making sure your arguments are clear and compelling.",
  },
  {
    head: "Dissertation Help",
    para: "A well-researched dissertation is a crucial part of your engineering degree. Our <b>engineering assignment writers</b> are experienced in conducting in-depth research and crafting dissertations that meet academic standards. From selecting a topic to organizing your findings, our <b>engineering assignment helper</b> is here to guide you through every stage of your dissertation.",
  },
  {
    head: "Case Study Help",
    para: "Engineering case studies often require detailed analysis and the application of theoretical knowledge to real-world situations. Our <b>engineering assignment helper</b> provides comprehensive solutions for case studies, ensuring that all aspects of the problem are thoroughly examined and addressed. Our <b>engineering assignment writers</b> are adept at analyzing complex cases and delivering insightful solutions.",
  },
  {
    head: "Thesis Help",
    para: "Crafting a thesis is one of the most challenging tasks for engineering students. Our <b>engineering assignment writers</b> are available to assist you with every step of the process, from formulating your research question to writing and editing the final document. With our <b>engineering assignment help Australia</b> service, you can be confident that your thesis will be well-researched, well-written, and properly formatted.",
  },
  {
    head: "Research Proposal Help",
    para: "A strong research proposal is essential for gaining approval to proceed with your engineering research. Our <b>engineering assignment writing service</b> includes assistance with drafting research proposals that are clear, concise, and convincing. Our <b>engineering assignment writers</b> ensure that your proposal outlines your research objectives, methodology, and expected outcomes effectively.",
  },
  {
    head: "Homework Help",
    para: "Engineering homework can be challenging, especially when you're juggling multiple assignments. Our <b>help with engineering assignment</b> service provides step-by-step solutions to help you understand complex problems and complete your homework on time. Our <b>engineering assignment writers</b> are dedicated to helping you grasp the underlying concepts so that you can confidently tackle similar problems in the future.",
  },
  {
    head: "Coursework Help",
    para: "Coursework is an integral part of your engineering education, and our <b>engineering assignment help service</b> is here to support you in completing it successfully. Whether you need help with a specific assignment or ongoing support throughout your course, our <b>engineering assignment writers</b> are available to provide the guidance and assistance you need.",
  },
  {
    head: "Assessment Help",
    para: "Preparing for assessments can be stressful, but our <b>engineering assignment help Australia</b> service is here to ease the pressure. Our engineering assignment writers provide thorough explanations and practice questions to help you prepare effectively for your assessments. With our help, you can approach your exams and quizzes with confidence.",
  },
  {
    head: "Exam & Quiz Help",
    para: "Engineering exams and quizzes require a solid understanding of the material and the ability to apply knowledge under time constraints. Our <b>engineering assignment writing service</b> offers expert guidance and study tips to help you perform well in your exams. Our engineering assignment writers can also provide practice quizzes and sample questions to help you prepare thoroughly.",
  },
  {
    head: "Report Writing Help",
    para: "Engineering reports require detailed analysis, clear presentation of data, and adherence to specific formatting guidelines. Our <b>engineering assignment writing service</b> provides assistance with writing well-organized and detailed reports that meet academic requirements. Our <b>engineering assignment writers</b> ensure that your reports are not only technically accurate but also easy to read and understand.",
  },
];

const Card = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
  >
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900">{item.head}</h3>
      <div className="prose prose-sm max-w-none text-gray-600">
        <p dangerouslySetInnerHTML={{ __html: item.para }} />
      </div>
    </div>
  </motion.div>
);

const ToggleView = () => {
  const [activeView, setActiveView] = useState("subject");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-gray-200 p-1">
            {["subject", "service"].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`
                  px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200
                  ${
                    activeView === view
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h2
            key={activeView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {activeView === "subject"
              ? "Let the Engineering Assignment Writers Help You Excel in All Areas of Engineering"
              : "Get Engineering Assignment Help Services of Various Types"}
          </motion.h2>
          <motion.p
            key={`${activeView}-desc`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            {activeView === "subject"
              ? "Engineering is a vast and complex field, encompassing a wide range of disciplines, each with its own unique challenges. Whether you're dealing with intricate calculations, detailed design work, or advanced theoretical concepts, completing engineering assignments can be a daunting task. This is where our expert engineering assignment writers come in."
              : "EngineeringAssignmentHelp.com understands that engineering students face a variety of academic challenges. To support your success, we offer a comprehensive range of engineering assignment help services tailored to meet your specific needs. Whether you're struggling with an essay, a complex thesis, or preparing for an exam, our team of expert engineering assignment writers is here to provide you with the guidance and support you need."}
          </motion.p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 gap-8"
            >
              {(activeView === "subject" ? subjects : services).map(
                (item, index) => (
                  <Card key={index} item={item} />
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Slider {...sliderSettings}>
                {(activeView === "subject" ? subjects : services).map(
                  (item, index) => (
                    <div key={index} className="px-2">
                      <Card item={item} />
                    </div>
                  )
                )}
              </Slider>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ToggleView;
