import axios from "axios";
import React, { useState, useRef } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import Captcha from "./Captcha";

const Form = () => {
    const [isValid, setIsValid] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false)

    const clearRef = useRef()
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
    })
    // for submit form on backend server 
    const sendEmail = async (e) => {
        e.preventDefault();
        if (isValid != true) {
            setIsValid("Captcha is incorrect. Try again.")
            alert("Plz verify Captcha")
            return false
        }
        try {
            const response = await axios.post('https://crm.clickinpedia.io/lead', {
                ...formData, "website": "www.clickinpedia.io",
                "mailaccesstokken": "nahev^q7e51584Q##@&85g"
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setIsLoading(true)
            setFormData({
                phone: '',
                email: '',
            });
            alert('Thank you for getting in touch!');

        } catch (error) {
            alert('Failed to send email');
        }
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    };

    return (
        <>
            <form className="lg:w-[400px] max-[480px]:hidden relative bg-slate-300 p-4 rounded-2xl lg:mx-auto max-[480px]:mx-4 my-8" onSubmit={sendEmail}>
                <h2 className="text-black text-center mb-3 text-2xl font-semibold">Contact with Engineering Experts</h2>
                <div className="mb-3">
                    <PhoneInput
                        country={'au'}
                        name="phone"
                        value={formData.phone}
                        placeholder="Enter your number"
                        onChange={(phone) => setFormData({ ...formData, phone })}
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="block focus:outline-none w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder='Please Enter your email' onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} type="email" name="email" required />
                </div>
                <Captcha clearRef={clearRef} isValid={isValid} setIsValid={setIsValid} />
                <button type="submit" className={`mb-3 mt-2 py-2 rounded-lg bg-yellow-300 text-black font-semibold w-full  hover:bg-yellow-500 ${isLoading && "bg-slate-900"}`}>Submit</button>
            </form>
        </>
    );
}
export default Form;