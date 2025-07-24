"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewData = [
  {
    name: "Henry",
    rating: 5,
    text: "I had an electrical engineering assignment due in just a few days, and I was totally lost. I didn't know where to start, and the pressure was getting to me. That's when I decided to try EngineeringAssignmentHelp.com. Their engineering assignment writers really saved me! They explained everything clearly and delivered a well-written assignment on time. Their engineering assignment help was exactly what I needed.",
  },
  {
    name: "Geet",
    rating: 5,
    text: "My civil engineering case study was so complex that I couldn't make sense of it. I spent hours researching, but nothing seemed to click. I reached out to EngineeringAssignmentHelp.com, and their engineering assignment writers took over. They broke down the problem and provided a detailed analysis that was easy to understand. Their engineering assignment help made all the difference.",
  },
  {
    name: "Mohammed Al-Fayed",
    rating: 5,
    text: "Balancing work and school was wearing me out, and my mechanical engineering assignment was just another stress on top of everything. I knew I needed help, so I turned to EngineeringAssignmentHelp.com. Their engineering assignment writing services were a lifesaver. They handled everything, and I was able to submit a high-quality assignment without losing sleep over it.",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "I was working on my chemical engineering thesis, and it felt like I was drowning in the details. There was so much to cover, and I wasn't sure if I was on the right track. I found EngineeringAssignmentHelp.com and decided to give them a try. Their engineering assignment writers really know their stuff. They helped me structure my thesis and made sure everything was accurate. Thanks to their engineering assignment help, I got the top marks I was aiming for.",
  },
  {
    name: "Carlos Rodriguez",
    rating: 5,
    text: "I'm not the best at coding, so when I got a software engineering project, I knew I was in trouble. The deadline was looming, and I couldn't afford to mess it up. I reached out to EngineeringAssignmentHelp.com for help. Their engineering assignment writers did an amazing job with the code and even included clear explanations so I could understand it better. Their engineering assignment help was exactly what I needed.",
  },
  {
    name: "Rotela",
    rating: 5,
    text: "I was really nervous about using an online service for the first time, but I was out of options with my environmental engineering assignment. I decided to try EngineeringAssignmentHelp.com, and I'm so glad I did. Their engineering assignment writing services were reliable, and the work they delivered was excellent. They really know how to provide quality engineering assignment help.",
  },
  {
    name: "Emily",
    rating: 5,
    text: "Aerospace engineering has always been challenging for me, especially when it comes to complex concepts. I had a big assignment due, and I just couldn't wrap my head around it. I reached out to EngineeringAssignmentHelp.com, and their engineering assignment helper took the time to explain everything to me. They made sure I understood the material and delivered a solid assignment. Their engineering assignment help made all the difference.",
  },
  {
    name: "Michael",
    rating: 5,
    text: "I was really stressed about plagiarism because my professor is very strict about it. I needed help with my mechanical engineering assignment, but I didn't want to take any risks. I decided to try EngineeringAssignmentHelp.com because they promised original content. The engineering assignment writers provided a completely plagiarism-free assignment, and I couldn't have been happier. Their engineering assignment help is both trustworthy and professional.",
  },
  {
    name: "Cris N",
    rating: 5,
    text: "I had specific instructions for my geotechnical engineering assignment, and I was worried about finding someone who could follow them. I found EngineeringAssignmentHelp.com and decided to give them a shot. Their engineering assignment writing services were fantastic! The writer followed every detail I provided and delivered a well-organized, insightful assignment. Their engineering assignment help really exceeded my expectations.",
  },
  {
    name: "Alex",
    rating: 5,
    text: "I was under a lot of pressure with my coursework and wasn't sure if I could handle my geotechnical engineering assignment on top of everything else. I decided to get help from EngineeringAssignmentHelp.com. The expert who assisted me was incredibly thorough and provided a detailed solution that covered everything. Their engineering assignment writers really know their stuff, and their engineering assignment help was exactly what I needed to succeed.",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between h-full group">
      <div className="space-y-6">
        {/* Header with avatar and user info */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-white font-bold text-lg">
                {review.name[0].toUpperCase()}
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              {review.name}
            </h3>
            <StarRating rating={review.rating} />
          </div>
        </div>

        {/* Review content */}
        <div className="relative">
          <p
            className={`text-gray-600 leading-relaxed text-base ${
              isExpanded ? "" : "line-clamp-4"
            }`}
          >
            {review.text}
          </p>

          {/* Fade effect for collapsed text */}
          {!isExpanded && review.text.length > 200 && (
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </div>
      </div>

      {/* Read more button */}
      {review.text.length > 200 && (
        <div className="pt-4 border-t border-gray-50 mt-6">
          <button
            className="text-blue-500 hover:text-blue-700 font-semibold text-sm transition-colors duration-200 flex items-center gap-1"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
            <span
              className={`transform transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    rows: 2,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Engineering Assignment Help Services Are Trusted By Clients From{" "}
            <span className="text-blue-600">Various Parts of the World</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Reviews slider */}
        <div className="relative overflow-hidden">
          <div className="review-slider-container">
            <Slider {...settings} className="review-slider">
              {reviewData.map((review, index) => (
                <div key={index} className="px-3 py-4">
                  <ReviewCard review={review} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Custom slider styles */}
      <style>{`
        .review-slider-container {
          overflow: hidden;
          margin: 0 -12px;
        }
        
        .review-slider {
          overflow: visible;
        }
        
        .review-slider .slick-track {
          display: flex;
          align-items: stretch;
        }
        
        .review-slider .slick-slide {
          height: auto;
        }
        
        .review-slider .slick-slide > div {
          height: 100%;
        }
        
        .review-slider .slick-dots {
          bottom: -60px;
        }
        
        .review-slider .slick-dots li {
          margin: 0 8px;
        }
        
        .review-slider .slick-dots li button:before {
          font-size: 14px;
          color: #3b82f6;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .review-slider .slick-dots li.slick-active button:before {
          color: #2563eb;
          opacity: 1;
          transform: scale(1.2);
        }
        
        .review-slider .slick-dots li:hover button:before {
          opacity: 0.8;
          transform: scale(1.1);
        }
        
        .review-slider .slick-list {
          overflow: hidden;
          padding: 0 12px;
        }
        
        /* Hide any overflow that might cause partial cards to show */
        .review-slider .slick-track {
          margin-left: 0;
        }
      `}</style>
    </section>
  );
};

export default Review;
