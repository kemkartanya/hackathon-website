import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons'
import { BiCurrentLocation, BiLocationPlus, BiPhoneCall, BiSolidLocationPlus} from 'react-icons/bi';
import axios from "axios";


const Contact = () => {

  // Create a state variable for the form data.
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    message: "",
  });

  // Create a form element with the `onSubmit` handler.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the state variable with the form data.
    setFormData(formData);

    try {
      // Make a POST request to your server's API endpoint
      const response = axios.post(
        'https://backend.getlinked.ai/hackathon/contact-form',
        formData
      );

      // Handle the response as needed (e.g., show success message)
      console.log('API Response:', response.data);
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error:', error);
    }

    alert('we will soon contact you');

    console.log("contact form data", formData);
  };


  return (
    <div className='bg-primaryColor text-white flex'>
      <div className='text-left p-[50px] w-1/2 m-[50px] ml-[100px]'>
        <div className='text-[30px] text-textColor font-bold'>Get in touch</div>

        <div className='mt-[10px]'>Contact <br /> Information </div>
        <div className='mt-[10px]'>27,Alara Street <br />
            Yaba 100012 <br />
            Lagos State
        </div>
        <div className='mt-[10px]'>Call Us: +234 679 81819</div>
        <div className='mt-[10px]'>We are open from Monday-Friday <br /> 08:00am - 05:00pm</div>

        <div className='mt-[10px] text-textColor'>Share on</div>
        <div className=''>
          {/* social media */}
            <SocialIcon bgColor="none" url="https://instagram.com" />
            <SocialIcon bgColor="none" url="https://x.com" />
            <SocialIcon bgColor="none" url="https://facebook.com" />
            <SocialIcon bgColor="none" url="https://linkedin.com" />
        </div>
      </div>
      
      <div className="text-left p-[50px] w-1/2 bg-[#100b1d] rounded m-[30px] mr-[100px]"> 
        
        <div className="text-textColor font-bold m-[10px]">
          Questions or need assistence? <br /> Let us know about it!
        </div>
        
        <form onSubmit={handleSubmit} className="my-[10px]">
          <input type="text" name="first_name" value={formData.first_name}
          placeholder="First Name"
          onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
          className="m-[10px] text-white bg-[#100b1d] border w-[350px] px-[20px] py-[5px]" 
          /> 
          <br />

          <input type="email" name="email" value={formData.email} 
          placeholder="Mail"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          className="m-[10px] text-white bg-[#100b1d] border w-[350px] px-[20px] py-[5px]"
          /> 
          <br />

          <textarea type="text" name="message" value={formData.age} 
          placeholder="Message"
          onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
          className="m-[10px] text-white bg-[#100b1d] border w-[350px] px-[20px] py-[5px]r"
          rows="3"
          /> 
          <br />
          
          <div className="flex justify-center">
            <button 
            type="submit" 
            value="submit" 
            className='gradient-button bg-headingColor my-[10px] p-[10px] w-[150px] rounded mx-[10px]'
            >
                Submit
            </button> 
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Contact