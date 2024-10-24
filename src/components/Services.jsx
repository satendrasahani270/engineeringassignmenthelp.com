import React, { useState } from "react";
import Slider from "react-slick";

const items = [
    {
      head: "Essay Help",
      para: "Writing an engineering essay requires a clear understanding of technical concepts and the ability to articulate them effectively. Our <b>help with engineering assignment</b> service ensures that your essays are well-structured, logically organized, and supported by relevant evidence. Our <b>engineering assignment writers</b> are skilled at presenting complex ideas in a coherent manner, making sure your arguments are clear and compelling."
    },
    {
      head: "Dissertation Help",
      para: 'A well-researched dissertation is a crucial part of your engineering degree. Our <b>engineering assignment writers</b> are experienced in conducting in-depth research and crafting dissertations that meet academic standards. From selecting a topic to organizing your findings, our <b>engineering assignment helper</b> is here to guide you through every stage of your dissertation.'
    },
    {
      head: "Case Study Help",
      para: 'Engineering case studies often require detailed analysis and the application of theoretical knowledge to real-world situations. Our <b>engineering assignment helper</b> provides comprehensive solutions for case studies, ensuring that all aspects of the problem are thoroughly examined and addressed. Our <b>engineering assignment writers</b> are adept at analyzing complex cases and delivering insightful solutions.'
    },
    {
      head: "Thesis Help",
      para: 'Crafting a thesis is one of the most challenging tasks for engineering students. Our <b>engineering assignment writers</b> are available to assist you with every step of the process, from formulating your research question to writing and editing the final document. With our <b>engineering assignment help Australia</b> service, you can be confident that your thesis will be well-researched, well-written, and properly formatted.'
    },
    {
      head: "Research Proposal Help",
      para: 'A strong research proposal is essential for gaining approval to proceed with your engineering research. Our <b>engineering assignment writing service</b> includes assistance with drafting research proposals that are clear, concise, and convincing. Our <b>engineering assignment writers</b> ensure that your proposal outlines your research objectives, methodology, and expected outcomes effectively.'
    },
    {
      head: "Homework Help",
      para: "Engineering homework can be challenging, especially when you're juggling multiple assignments. Our <b>help with engineering assignment</b> service provides step-by-step solutions to help you understand complex problems and complete your homework on time. Our <b>engineering assignment writers</b> are dedicated to helping you grasp the underlying concepts so that you can confidently tackle similar problems in the future."
    },
    {
      head: "Coursework Help",
      para: "Coursework is an integral part of your engineering education, and our <b>engineering assignment help service</b> is here to support you in completing it successfully. Whether you need help with a specific assignment or ongoing support throughout your course, our <b>engineering assignment writers</b> are available to provide the guidance and assistance you need."
    },
    {
      head: "Assessment Help",
      para: "Preparing for assessments can be stressful, but our <b>engineering assignment help Australia</b> service is here to ease the pressure. Our engineering assignment writers provide thorough explanations and practice questions to help you prepare effectively for your assessments. With our help, you can approach your exams and quizzes with confidence."
    },
    {
      head: "Exam & Quiz Help",
      para: "Engineering exams and quizzes require a solid understanding of the material and the ability to apply knowledge under time constraints. Our <b>engineering assignment writing service</b> offers expert guidance and study tips to help you perform well in your exams. Our engineering assignment writers can also provide practice quizzes and sample questions to help you prepare thoroughly."
    },
    {
      head: "Report Writing Help",
      para: "Engineering reports require detailed analysis, clear presentation of data, and adherence to specific formatting guidelines. Our <b>engineering assignment writing service</b> provides assistance with writing well-organized and detailed reports that meet academic requirements. Our <b>engineering assignment writers</b> ensure that your reports are not only technically accurate but also easy to read and understand."
    },
  ]

const Card = ({ item, height, setHeight, clickHeight, index }) => (
  <div
    key={index}
    className="p-6 h-[403px] overflow-hidden text-center border  rounded-3xl shadow bg-gray-200 hover:bg-gray-600 hover:rounded-2xl min-[1024px]:hover:animate-pulse hover:text-white"
  >
    <div
      className={`${
        height === index ? " overflow-y-scroll" : "overflow-y-hidden"
      }`}
      style={{ scrollbarWidth: "none" }}
    >
      {/* <div className={`${height === index ? 'h-auto' : 'h-[445px]'} max-[480px]:h-auto`}> */}
      <div>
        <a href="#">
          <h3 className="mb-2 text-[30px] text-center font-bold tracking-tight hover:text-white">
            {item.head}
          </h3>
        </a>
        <div
          className="h-64 p-0 overflow-y-auto mt-3"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <p
            className="text-[1.2rem]"
            style={{
              WebkitOverflowScrolling: "touch",
              "::-webkit-scrollbar": { display: "none" },
            }}
            dangerouslySetInnerHTML={{ __html: item.para }}
          />
        </div>
      </div>
    </div>
    {/* <button
            onClick={() => clickHeight(index)}
            className="inline-flex max-[480px]:hidden  px-4 py-2 mt-2  font-medium text-black bg-yellow-400 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            {`${height === index ? 'Read Less' : "Read more"}`}
        </button> */}
  </div>
);

const Subject = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 7000,
    cssEase: "linear",
    pouseOnOver: true,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [height, setHeight] = useState(null);
  const clickHeight = (index) => {
    if (height === index) {
      setHeight(null);
    } else {
      setHeight(index);
    }
  };
  return (
    <>
      <div id="subject" className=" slider-container w-full relative">
        <h2 className="text-center text-5xl font-semibold mb-2 text-black">
        Get Engineering Assignment Help Services of Various Types
        </h2>
        <p className="max-[480px]:px-2 text-center max-w-screen-2xl mx-auto text-[1.3rem]">
        EngineeringAssignmentHelp.com understands that engineering students face a variety of academic challenges. To support your success, we offer a comprehensive range of engineering assignment help services tailored to meet your specific needs. Whether you're struggling with an essay, a complex thesis, or preparing for an exam, our team of expert engineering assignment writers is here to provide you with the guidance and support you need.
        </p>
        <Slider {...settings} className="abdul mt-5">
          {items.map((item, index) => (
            <Card
              key={index + 1}
              index={index}
              item={item}
              height={height}
              setHeight={setHeight}
              clickHeight={clickHeight}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Subject;
