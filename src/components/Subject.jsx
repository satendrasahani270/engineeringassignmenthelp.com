import React, { useState } from "react";
import Slider from "react-slick";

const data = [
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
          Let the Engineering Assignment Writers Help You Excel in All{" "}
          <br className=" max-md:hidden" /> Areas of Engineering
        </h2>
        <p className="max-[480px]:px-2 text-center max-w-screen-2xl mx-auto text-[1.3rem]">
          Engineering is a vast and complex field, encompassing a wide range of
          disciplines, each with its own unique challenges. Whether you're
          dealing with intricate calculations, detailed design work, or advanced
          theoretical concepts, completing engineering assignments can be a
          daunting task. This is where our expert{" "}
          <b className="text-[#425569]">engineering assignment writers</b> come in. We offer specialized
          engineering assignment help across various disciplines to ensure that
          students can overcome the challenges they face and achieve academic
          excellence. Our team is equipped to provide comprehensive support,
          helping you tackle even the most difficult assignments with
          confidence.
        </p>
        <Slider {...settings} className="abdul mt-5">
          {data.map((item, index) => (
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
