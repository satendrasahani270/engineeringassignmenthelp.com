"use client"

import React, { useState } from 'react'
import Slider from "react-slick"
import { Star } from 'lucide-react'

const reviewData = [
  { name: "Henry", rating: 5, text: "I had an electrical engineering assignment due in just a few days, and I was totally lost. I didn't know where to start, and the pressure was getting to me. That's when I decided to try EngineeringAssignmentHelp.com. Their engineering assignment writers really saved me! They explained everything clearly and delivered a well-written assignment on time. Their engineering assignment help was exactly what I needed." },
  { name: "Geet", rating: 5, text: "My civil engineering case study was so complex that I couldn't make sense of it. I spent hours researching, but nothing seemed to click. I reached out to EngineeringAssignmentHelp.com, and their engineering assignment writers took over. They broke down the problem and provided a detailed analysis that was easy to understand. Their engineering assignment help made all the difference." },
  { name: "Mohammed Al-Fayed", rating: 5, text: "Balancing work and school was wearing me out, and my mechanical engineering assignment was just another stress on top of everything. I knew I needed help, so I turned to EngineeringAssignmentHelp.com. Their engineering assignment writing services were a lifesaver. They handled everything, and I was able to submit a high-quality assignment without losing sleep over it." },
  { name: "Priya Sharma", rating: 5, text: "I was working on my chemical engineering thesis, and it felt like I was drowning in the details. There was so much to cover, and I wasn't sure if I was on the right track. I found EngineeringAssignmentHelp.com and decided to give them a try. Their engineering assignment writers really know their stuff. They helped me structure my thesis and made sure everything was accurate. Thanks to their engineering assignment help, I got the top marks I was aiming for." },
  { name: "Carlos Rodriguez", rating: 5, text: "I'm not the best at coding, so when I got a software engineering project, I knew I was in trouble. The deadline was looming, and I couldn't afford to mess it up. I reached out to EngineeringAssignmentHelp.com for help. Their engineering assignment writers did an amazing job with the code and even included clear explanations so I could understand it better. Their engineering assignment help was exactly what I needed." },
  { name: 'Rotela', rating: 5, text: "I was really nervous about using an online service for the first time, but I was out of options with my environmental engineering assignment. I decided to try EngineeringAssignmentHelp.com, and I'm so glad I did. Their engineering assignment writing services were reliable, and the work they delivered was excellent. They really know how to provide quality engineering assignment help." },
  { name: 'Emily', rating: 5, text: "Aerospace engineering has always been challenging for me, especially when it comes to complex concepts. I had a big assignment due, and I just couldn't wrap my head around it. I reached out to EngineeringAssignmentHelp.com, and their engineering assignment helper took the time to explain everything to me. They made sure I understood the material and delivered a solid assignment. Their engineering assignment help made all the difference." },
  { name: 'Michael', rating: 5, text: "I was really stressed about plagiarism because my professor is very strict about it. I needed help with my mechanical engineering assignment, but I didn't want to take any risks. I decided to try EngineeringAssignmentHelp.com because they promised original content. The engineering assignment writers provided a completely plagiarism-free assignment, and I couldn't have been happier. Their engineering assignment help is both trustworthy and professional." },
  { name: 'Cris N', rating: 5, text: "I had specific instructions for my geotechnical engineering assignment, and I was worried about finding someone who could follow them. I found EngineeringAssignmentHelp.com and decided to give them a shot. Their engineering assignment writing services were fantastic! The writer followed every detail I provided and delivered a well-organized, insightful assignment. Their engineering assignment help really exceeded my expectations." },
  { name: 'Alex', rating: 5, text: "I was under a lot of pressure with my coursework and wasn't sure if I could handle my geotechnical engineering assignment on top of everything else. I decided to get help from EngineeringAssignmentHelp.com. The expert who assisted me was incredibly thorough and provided a detailed solution that covered everything. Their engineering assignment writers really know their stuff, and their engineering assignment help was exactly what I needed to succeed." },
]

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
            {review.name[0]}
          </div>
          <div>
            <h5 className="font-semibold text-xl">{review.name}</h5>
            <StarRating rating={review.rating} />
          </div>
        </div>
        <p className={`text-gray-600  text-[1.3rem] ${isExpanded ? '' : 'line-clamp-4'}`}>
          {review.text}
        </p>
      </div>
      {review.text.length > 200 && (
        <button
          className="text-blue-500 hover:text-blue-700 font-semibold mt-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  )
}

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        }
      }
    ]
  }

  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Engineering Assignment Help Services Are Trusted By Clients From Various Parts of the World
        </h2>
        <Slider {...settings} className="review-slider">
          {reviewData.map((review, index) => (
            <div key={index} className="px-2 py-4">
              <ReviewCard review={review} />
            </div>
          ))}
        </Slider>
      </div>
      <style jsx global>{`
        .review-slider .slick-dots li button:before {
          font-size: 12px;
          color: #3B82F6;
        }
        .review-slider .slick-dots li.slick-active button:before {
          color: #2563EB;
        }
      `}</style>
    </section>
  )
}

export default Review