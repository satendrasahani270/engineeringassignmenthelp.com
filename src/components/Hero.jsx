import React, { useState } from 'react';
import Form from './Form';
import { motion } from 'framer-motion'
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react'

const StarRating = () => {
    return (
        <svg
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
};

const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block  xl:inline">Best Engineering</span>{' '}
              <span className="block xl:inline">Assignment Help in Australia for Students</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            EngineeringAssignmentHelp.com understands the unique challenges students face when tackling engineering assignments. Our platform offers reliable and comprehensive engineering assignment help to students who need help with their assignments. Our team of engineering assignment writers provides top-notch engineering assignment writing services to help you excel in your studies and achieve your academic goals.
            </p>
            <div className="rounded-md mt-5 shadow">
                <a
                  href="/tel:+61489921023"
                  className="  items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#fde047]  md:py-4 md:text-lg md:px-10"
                >
                  Create an Order
                </a>
              </div>
           
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
           
            </div>
           
          </motion.div>

          <motion.div
            className="relative  "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <div className=' hidden max-[1024px]:hidden'>
                            <Form />
                        </div>   
            <div className="aspect-w-5 aspect-h-3 rounded-lg shadow-lg overflow-hidden sm:aspect-w-16 sm:aspect-h-9">
              <img
                className="object-cover"
                src="https://www.engineeringassignmenthelp.com/assets/eahhero.webp"
                alt="Student working on laptop"
              />
              <div className="absolute flex items-center inset-0  from-blue-600 to-blue-400 opacity-20"></div>
            </div>
          </motion.div>
        </div>


        <div className='  max-[1024px]:block'>
                            <Form />
                        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
      {[
        { icon: Phone, text: "800+ Professional writers" },
        { icon: MessageSquare, text: "Direct 24/7 chat" },
        { icon: ShieldCheck, text: "Plagiarism-free content" },
      ].map((feature, index) => (
        <motion.div
          key={feature.text}
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
        >
          <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
            <feature.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-gray-900">{feature.text}</p>
          </div>
        </motion.div>
      ))}
    </div>


      </div>
    </section>
    );
};


export default Hero;

