import axios from "axios";
import React, { useState, useRef } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Captcha from "./Captcha";

const Form = () => {
    const [isValid, setIsValid] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const clearRef = useRef();
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
    });

    // for submit form on backend server 
    const sendEmail = async (e) => {
        e.preventDefault();
        if (isValid !== true) {
            setIsValid("Captcha is incorrect. Try again.");
            alert("Please verify Captcha");
            return false;
        }
        try {
            const response = await axios.post('https://crm.clickinpedia.io/lead', {
                ...formData,
                "website": "www.clickinpedia.io",
                "mailaccesstokken": "nahev^q7e51584Q##@&85g"
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setIsLoading(true);
            setFormData({
                phone: '',
                email: '',
            });
            alert('Thank you for getting in touch!');

        } catch (error) {
            alert('Failed to send email');
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <form className="lg:w-[100%] sm:w-[100%] w-full mx-auto relative bg-slate-100 p-6 rounded-lg shadow-lg  my-8" onSubmit={sendEmail}>
            <h2 className="text-black text-center mb-5 text-2xl font-semibold">Contact with Engineering Experts</h2>
            
            <div className="flex items-center gap-4 flex-wrap justify-center">
                {/* Phone Input */}
                <div className="mb-3">
                    <PhoneInput
                        country={'au'}
                        name="phone"
                        value={formData.phone}
                        placeholder="Enter your number"
                        onChange={(phone) => setFormData({ ...formData, phone })}
                        containerClass="w-full phone-input-container"
                        inputClass="phone-input-field"
                    />
                </div>

                {/* Email Input */}
                <div className="mb-3">
                    <input
                        className="block w-full rounded-md border m-t-left border-gray-300 py-3 pl-7 pr-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder='Please Enter your email'
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        value={formData.email}
                        type="email"
                        name="email"
                        required
                    />
                </div>

                {/* Captcha */}
                <Captcha clearRef={clearRef} isValid={isValid} setIsValid={setIsValid} />

                {/* Submit Button */}
               
            </div>
           <p className="text-center"> <button type="submit" className={`mt-4 py-3 rounded-lg w-[30%] bg-yellow-400 text-white font-semibold hover:bg-yellow-500  transition-all duration-300 ${isLoading && "bg-slate-900"}`}>
                    {isLoading ? "Loading..." : "Submit"}
                </button>
                </p>
        </form>
    );
}

export default Form;
