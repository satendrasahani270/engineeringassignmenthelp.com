'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageSquare, ShieldCheck, BrainCircuit } from 'lucide-react'
import Form from './form'

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#fefdf9] relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid lg:grid-cols-[1.5fr,400px] gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-start pt-8 w-full"
          >
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] font-bold tracking-tight">
              <span className="block text-[#1e293b]">Best Engineering</span>
              <span className="block text-[#facc15]">Assignment Help</span>
              <span className="block">
                <span className="text-[#facc15]">in Australia</span>
                <span className="text-[#1e293b]"> for Students</span>
              </span>
            </h1>
            
            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-3xl">
            EngineeringAssignmentHelp.com understands the unique challenges students face when tackling engineering assignments. Our platform offers reliable and comprehensive engineering assignment help to students who need help with their assignments. Our team of engineering assignment writers provides top-notch engineering assignment writing services to help you excel in your studies and achieve your academic goals.
              </p>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="/order"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-900 bg-[#facc15] rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:shadow-lg"
              >
                Order Now
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Features */}
         
          </motion.div>
          

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-8"
          >
            <Form />
          </motion.div>
        </div>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {[
                { 
                  icon: Phone, 
                  title: "800+",
                  text: "Professional writers"
                },
                { 
                  icon: MessageSquare, 
                  title: "Direct 24/7",
                  text: "chat"
                },
                { 
                  icon: ShieldCheck, 
                  title: "Plagiarism-",
                  text: "free content"
                },
                { 
                  icon: BrainCircuit, 
                  title: "Non-AI",
                  text: "Content"
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="w-full flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 min-h-[80px]"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-yellow-50 rounded-lg">
                    <feature.icon className="w-5 h-5 text-[#facc15]" />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-base font-medium text-gray-900 leading-tight">{feature.title}</p>
                    <p className="text-sm text-gray-600">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
      </div>
    </section>
  )
}

