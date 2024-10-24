import React, { useState } from "react";
import { ChevronDown, ChevronUp  } from 'lucide-react';

const faqData = [
  {
    question: "What is the best Engineering assignment help in Australia?",
    answer:
      "The best engineering assignment help in Australia is Engineeringassignmenthelp.com as it offers a combination of expert writers, timely delivery, and high-quality content. You can also look at their services with positive reviews, a strong track record, and the ability to cater to a wide range of engineering disciplines.",
  },
  {
    question:
      "Is it legal to take online engineering assignment help in Australia?",
    answer:
      "Yes, it is legal to take online engineering assignment help in Australia as long as the service is used ethically. This means using the work as a study guide or reference and not submitting it as your own.",
  },
  {
    question: "Can the engineering assignment writers fulfill my requirements?",
    answer:
      "Yes, our professional engineering assignment writers are well-equipped to fulfill your specific requirements. They are experts in various fields of engineering and can tailor their work to meet your academic needs.",
  },
  {
    question:
      "Where is the best website to get help with engineering assignments in Australia?",
    answer:
      "The best website to get help with engineering assignments in Australia is Engineeringassignmenthelp.com as it offers comprehensive support, including expert writers, a variety of services, and a commitment to delivering original, high-quality content.",
  },
  {
    question: "Can I get engineering assignment help if my budget is less?",
    answer:
      "Yes, our engineering assignment help services offer affordable options for students with limited budgets. It’s important to choose a service that provides good value for money without compromising on quality.",
  },
  {
    question:
      "Is it legal to take engineering assignment help in Australia from experts?",
    answer:
      "Yes, it is legal to seek engineering assignment help in Australia from experts, provided the work is used as a reference or study aid and not submitted as your own original work.",
  },
  {
    question:
      "What if I am not satisfied with the engineering assignment help delivered to me?",
    answer:
      "Our engineering assignment help services usually offer revisions if you are not satisfied with the delivered work. It’s important to communicate your concerns so they can be addressed promptly.",
  },
  {
    question: "Can I talk to the engineering assignment writers directly?",
    answer:
      "Yes, our engineering assignment writing services allow direct communication with the engineering assignment writers, which can be helpful for clarifying requirements and ensuring the assignment meets your expectations.",
  },
  {
    question: "Is my personal details secure?",
    answer:
      "Yes, our trustworthy engineering assignment help services prioritize the security of your personal details. We have strict privacy policies in place to ensure that your information remains confidential.",
  },
  {
    question: "Do your engineering assignment writers assure A+ grades?",
    answer:
      "While engineering assignment writers strive to produce high-quality work, guaranteeing an A+ grade depends on various factors, including adherence to guidelines and personal academic performance. However, our services aim to maximize your chances of achieving top grades.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const firstSet = faqData.slice(0, 5);
  const secondSet = faqData.slice(5);

  return (
    <section className="bg-gray-100 py-16 relative">
   
    <div className="max-[768px]:w-full pl-10 pr-8">
      <h2 className="text-3xl text-blue-700 font-bold mb-4">FAQ</h2>
      <hr className="w-12 border-b-4 border-red-500 mb-4" />
      <div className="font-bold -tracking-tighter text-2xl pb-4">
        Commonly asked questions by engineering students in Australia
      </div>
      <p className="pb-8 text-gray-600 text-[1.3rem]">
        These are the most commonly asked Questions about assignment Help.
        <br />
        Can't find what you're looking for?
        <span className="underline hover:delay-1000 cursor-pointer hover:decoration-dotted">
         
       <a href="https://api.whatsapp.com/send/?phone=61489921023&text&type=phone_number&app_absent=0">   Chat to our friendly team!</a>
        </span>
      </p>
      <div className="w-full cursor-pointer">
        <button className=" max-w-max transition-all ease-in-out bg-slate-700   max-lg:text-lg max-[1024px]:text-[1rem] font-semibold font-serif text-white py-4 px-8 max-[1024px]:p-4  rounded-xl hover:rounded-full">
          <a href="tel:+61489921023">Feel Free To Contact</a>
        </button>
      </div>
    </div>
    <div className="container image-bg flex mt-5 max-[768px]:flex-col z-10 relative gap-8 mx-auto px-4">
      
    {/* <img
      className="absolute -z-0 w-full opacity-20 webkit-height max-[768px]:h-[400px] max-[480px]:h-[282px] max-[768px]:opacity-50 top-0"
      src={"../.././assets/faq.webp"}
      alt=""
    /> */}
      <div className="w-2/3 grid grid-cols-1 max-[1024px]:grid-cols-1 max-[1024px]:w-full gap-8">
        {firstSet.map((item, index) => (
          <div key={index} className="mb-4  rounded-md pb-4">
            <button
              className="flex gap-4 items-center w-full text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-2xl">
                <img src={"../.././assets/faqq.webp"} alt="Faq Question" />
              </span>
              <p className="flex justify-between w-full border-b border-gray-200">
                <h3 className="text-xl font-semibold ">{item.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-end h-8 w-8 transform transition-transform duration-300" />
                ) : (
                  <ChevronDown className="text-end h-8 w-8 transform transition-transform duration-300" />
                )}
              </p>
            </button>
            <div
              className={`overflow-hidden  py-[0.1rem] px-5 rounded-md mt-2 transition-all ease-in-out duration-300 ${openIndex === index ? "max-h-screen" : "max-h-0"}`}
            >
              <p className="mt-2 text-[1.3rem] pl-16 text-dark">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-2/3 grid grid-cols-1 max-[1024px]:grid-cols-1 max-[1024px]:w-full gap-8">
        {secondSet.map((item, index) => (
          <div key={index + 5} className="mb-4  rounded-md pb-4">
            <button
              className="flex gap-4 items-center w-full text-left"
              onClick={() => toggleAccordion(index + 5)}
            >
              <span className="text-2xl">
                <img src={"../.././assets/faqq.webp"} alt="Faq Question" />
              </span>
              <p className="flex justify-between w-full border-b border-gray-200 p-2">
                <h3 className="text-xl font-semibold">{item.question}</h3>
                {openIndex === index + 5 ? (
                  <ChevronUp className="text-end h-8 w-8 transform transition-transform duration-300" />
                ) : (
                  <ChevronDown className="text-end h-8 w-8 transform transition-transform duration-300" />
                )}
              </p>
            </button>
            <div
              className={`overflow-hidden transition-all  py-[0.1rem] px-5 rounded-md mt-2 ease-in-out duration-300 ${openIndex === index + 5 ? "max-h-screen" : "max-h-0"}`}
            >
              <p className="mt-2 text-[1.3rem] pl-16 text-dark">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default FAQ;
