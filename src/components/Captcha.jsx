import React, { useState } from 'react';

const Captcha = ({ clearRef, isValid, setIsValid }) => {
  const [captcha, setCaptcha] = useState('');
  const [userInput, setUserInput] = useState('');

  const generateCaptcha = () => {
    let char = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      char += characters.charAt(randomIndex);
    }
    setCaptcha(char);
  };

  // Function to handle user input
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Function to validate the user input
  const validateCaptcha = () => {
    if (userInput === captcha) {
      setIsValid(true);
    } else {
      setIsValid("Captcha is incorrect. Try again.")
    }
  };

  // Generate a new CAPTCHA when the component mounts
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <>
      <div className='text-black flex justify-between flex-wrap gap-5'>

        <div className='flex gap-2 m-t-12'>
          <input
            className='rounded-md py-3 px-3 focus:outline-none md:w-[100%] w-[100%] border-0 py-1.5 md:pl-7 pl-2 text-gray-900 ring-1 focus:ring-2 focus:ring-yellow-500 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6'
            type="text"
            name='capchafield'
            placeholder="Enter Captcha"
            value={userInput}
            onChange={handleChange}
            required
          />
          <button className='text-[1.3rem]' type='button' onClick={validateCaptcha}>Validate</button>
        </div>
        <div className=' flex gap-2 m-t-12 items-center ml-5'>
          <input type='hidden' ref={clearRef} onClick={() => setUserInput("")} />
          <p className='text-[1.3rem]'>{captcha}</p>
          <button id='generateButton' onClick={generateCaptcha}><img  width={20} height={20} src={"/assets/rotate-reverse.webp"} alt="regenerateCaptcha" /></button>
        </div>
      </div>
      <div className='text-center text-black'>
        {isValid == true ? <p>Captcha is correct!</p> : <p>{isValid}</p>}
      </div>

    </>
  );
};

export default Captcha;
