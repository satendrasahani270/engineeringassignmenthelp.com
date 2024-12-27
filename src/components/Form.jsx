import React, { useState, useRef } from 'react'
import axios from 'axios'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { motion, AnimatePresence } from 'framer-motion'
import Captcha from './captcha'
import { CheckCircle2, ChevronRight, Lock, Mail, Phone, AlertCircle } from 'lucide-react'

export default function Form() {
  const [step, setStep] = useState(1)
  const [isValid, setIsValid] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [isPhoneValid, setIsPhoneValid] = useState(false)
  const [error, setError] = useState(null)
  const clearRef = useRef()
  
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  })

  const validatePhone = (phone) => {
    return phone.length >= 10
  }

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone })
    setIsPhoneValid(validatePhone(phone))
    setError(null)
  }

  const handleEmailChange = (e) => {
    const email = e.target.value
    setFormData({ ...formData, email })
    setError(null)
  }

  const nextStep = () => {
    setError(null)
    
    if (step === 1 && !isPhoneValid) {
      setError('Please enter a valid phone number')
      return
    }
    
    if (step === 2) {
      if (!formData.email) {
        setError('Please enter your email address')
        return
      }
      if (!validateEmail(formData.email)) {
        setError('Please enter a valid email address')
        return
      }
    }
    
    setStep(prev => prev + 1)
  }

  const resetForm = () => {
    setStep(1)
    setFormData({
      phone: '',
      email: '',
    })
    setIsPhoneValid(false)
    setIsValid(undefined)
    setError(null)
    if (clearRef.current) {
      clearRef.current()
    }
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    setError(null)

    if (isValid !== true) {
      setIsValid("Captcha is incorrect. Try again.")
      setError("Please complete the captcha verification")
      return false
    }
    
    try {
      setIsLoading(true)
      const response = await axios.post('https://portal.be.clickinpedia.io/send-lead', {
        ...formData,
        "website": "www.engineeringassignmenthelp.com",
        "mailaccesstokken": "nahev^q7e51584Q##@&85g"
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })

      if (response.data) {
        setStep(4)
        // Reset form data but keep the success message
        setFormData({
          phone: '',
          email: '',
        })
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Failed to send email. Please try again.')
        console.error('Server Error:', error.response.data)
      } else if (error.request) {
        setError('Network error. Please check your connection and try again.')
        console.error('Network Error:', error.request)
      } else {
        setError('Failed to send email. Please try again later.')
        console.error('Error:', error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-[#facc15] to-yellow-500 transform -skew-y-6 rounded-3xl opacity-10" />
      
      <form 
        onSubmit={sendEmail}
        className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Get Expert Help Now
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Connect with our engineering experts
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-1/3 h-1.5 rounded-full transition-colors duration-200 ${
                i <= step ? 'bg-[#facc15]' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 flex items-center"
          >
            <AlertCircle className="w-5 h-5 mr-2" />
            {error}
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[280px] flex flex-col"
          >
            {step === 1 && (
              <div className="space-y-6 flex-1">
                <div className="flex-1">
                  <label className="flex items-center text-base font-medium text-gray-700 mb-3">
                    <Phone className="w-5 h-5 mr-2" />
                    Phone Number
                  </label>
                  <div className="[&>.react-tel-input]:!w-full [&>.react-tel-input>.form-control]:!w-full [&>.react-tel-input>.form-control]:!h-[48px] [&>.react-tel-input>.form-control]:!text-lg [&>.react-tel-input>.form-control]:!rounded-lg [&>.react-tel-input>.flag-dropdown]:!rounded-l-lg [&>.react-tel-input>.flag-dropdown]:!border-gray-300">
                    <PhoneInput
                      country={'au'}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputClass="!w-full !border-gray-300 focus:!border-yellow-400 focus:!ring-2 focus:!ring-yellow-400/20"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isPhoneValid}
                  className={`
                    w-full py-4 px-6 rounded-lg text-lg font-semibold flex items-center justify-center
                    transition-all duration-200
                    ${!isPhoneValid 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-[#facc15] text-gray-900 hover:bg-yellow-400 hover:shadow-lg active:transform active:scale-95'
                    }
                  `}
                >
                  Continue
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 flex-1">
                <div className="flex-1">
                  <label className="flex items-center text-base font-medium text-gray-700 mb-3">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleEmailChange}
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-400 transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!formData.email}
                  className={`
                    w-full py-4 px-6 rounded-lg text-lg font-semibold flex items-center justify-center
                    transition-all duration-200
                    ${!formData.email 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-[#facc15] text-gray-900 hover:bg-yellow-400 hover:shadow-lg active:transform active:scale-95'
                    }
                  `}
                >
                  Continue
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 flex-1">
                <div className="flex-1">
                  <label className="flex items-center text-base font-medium text-gray-700 mb-3">
                    <Lock className="w-5 h-5 mr-2" />
                    Verification
                  </label>
                  <Captcha 
                    clearRef={clearRef} 
                    isValid={isValid} 
                    setIsValid={setIsValid} 
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`
                    w-full py-4 px-6 rounded-lg text-lg font-semibold
                    transition-all duration-200 flex items-center justify-center
                    ${isLoading 
                      ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                      : 'bg-[#facc15] text-gray-900 hover:bg-yellow-400 hover:shadow-lg active:transform active:scale-95'
                    }
                  `}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Get Free Consultation'
                  )}
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-8 flex-1 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  We'll get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Submit another response
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="text-center text-sm text-gray-500 mt-6 flex items-center justify-center">
          <Lock className="w-4 h-4 mr-1" />
          Your information is secure and encrypted
        </div>
      </form>
    </div>
  )
}