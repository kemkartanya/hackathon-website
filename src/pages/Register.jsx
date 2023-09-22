import React, { useState } from "react";
import RegisterImg from '../assets/images/register.png'

const Register = () => {

  // Create a state variable for the form data.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Create a form element with the `onSubmit` handler.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the state variable with the form data.
    setFormData(formData);
  };


  return (
    <div className='bg-primaryColor text-white flex'>
      <div>
        <img src={RegisterImg} alt="" />
      </div>
      
      <div className="text-left p-[80px] w-1/2 bg-[#100b1d] rounded m-[50px] mr-[100px]"> 
        <div className="text-textColor font-bold">Questions or need assistence? <br /> Let us know about it!</div>
        <form onSubmit={handleSubmit} className="my-[10px]">
          <input type="text" name="name" value={formData.name}
          placeholder="First Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="m-[5px] text-white bg-[#100b1d] border w-[300px] px-[20px] py-[5px]" 
          /> 
          <br />

          <input type="email" name="email" value={formData.email} 
          placeholder="Mail"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          className="m-[5px] text-white bg-[#100b1d] border w-[300px] px-[20px] py-[5px]"
          /> 
          <br />

          <textarea type="text" name="message" value={formData.age} 
          placeholder="Message"
          onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
          className="m-[5px] text-white bg-[#100b1d] border w-[300px] px-[20px] py-[5px]r"
          rows="3"
          /> 
          <br />
          <button type="submit" value="submit" className='gradient-button bg-headingColor my-[30px] p-[10px] w-[150px] rounded'>
              Submit
          </button> 
        </form>
      </div>
    </div>
  )
}

export default Register