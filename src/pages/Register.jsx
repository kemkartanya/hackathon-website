import React, { useState, useEffect } from 'react';
import RegisterImg from '../assets/images/register.png'
import PartOfMove from '../assets/images/Part of move.png'
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Register = () => {

  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState({
    team_name: '',
    phone_number: '', // Change type to 'text'
    email: '',
    project_topic: '',
    category: '', // Initialize category as an empty string
    group_size: 1, // Initialize group_size with a default value
    privacy_policy_accepted: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    // Use a callback function to update isChecked
    setIsChecked((prev) => !prev);

    // Handle checkbox differently
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [id]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update the state variable with the form data.
    setFormData(formData);

    try {
      // Make a POST request to your server's API endpoint
      const response = await axios.post(
        'https://backend.getlinked.ai/hackathon/register',
        formData
      );

      // Handle the response as needed (e.g., show success message)
      console.log('API Response:', response.data);
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error:', error);
    }

    navigate('/success');
    console.log('form data', formData);
  };

  

  // category-list 
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    fetch('https://backend.getlinked.ai/hackathon/categories-list')
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setCategoryList(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
   }, []);

  


  return (
    <div className='bg-primaryColor text-white flex'>
      <div className="w-1/2">
        <img src={RegisterImg} alt="" />
      </div>
      
      <div className="text-left p-[30px] w-1/2 bg-[#100b1d] rounded m-[30px]"> 
        
        <div className="text-textColor font-bold m-[10px] text-[25px]">
          <div>Register</div>
          <img src={PartOfMove} alt="" />
          <div className="text-white">CREATE YOUR ACCOUNT</div>
        </div>
        
        <div align="center" className=" rounded">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap justify-center items-center text-left">
                <div className="form-group m-3">
                  <label htmlFor="team_name">Team's Name</label> <br />
                  <input
                    type="text"
                    className="form-control w-[230px] p-3 bg-[#100b1d] border text-white"
                    id="team_name"
                    placeholder="Enter the name of your group"
                    required
                    value={formData.team_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group m-3 "> 
                  <label htmlFor="phone_number">Phone</label> <br />
                  <input
                    type="phone_number"
                    className="form-control w-[230px] p-3 text-white bg-[#100b1d] border "
                    id="phone_number"
                    placeholder="Enter your phone number"
                    required
                    value={formData.phone_number}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group m-3">
                  <label htmlFor="email">Email</label> <br />
                  <input
                    type="email"
                    className="form-control w-[230px] p-3 text-white bg-[#100b1d] border "
                    id="email"
                    placeholder="Enter your email address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
             
                <div className="form-group m-3">
                  <label htmlFor="project_topic">Project Topic</label> <br />
                  <input
                    type="text"
                    className="form-control w-[230px] p-3 text-white bg-[#100b1d] border "
                    id="project_topic"
                    placeholder="What is your group project topic"
                    required
                    value={formData.project_topic}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group m-3">
                  <label htmlFor="category">Category</label> <br />
                  <select 
                  id='category' 
                  name="category"
                  required
                  placeholder="Select Your Category"
                  value={formData.category}
                  onChange={handleChange}
                  className='w-[230px] p-3 text-white bg-[#100b1d] border '
                  >
                    {categoryList.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>    
                </div>

                <div className="form-group m-3">
                  <label htmlFor="group_size">Group size</label> <br />
                  <select
                    className="form-control w-[230px] p-3 text-white bg-[#100b1d] border "
                    id="group_size"
                    name="group_size"
                    placeholder="Select"
                    required
                    value={formData.group_size}
                    onChange={handleChange}
                  >
                    <option key="1" value="1">1</option>
                    <option key="2" value="2">2</option>
                    <option key="3" value="3">3</option>
                    <option key="4" value="4">4</option>
                  </select>
                </div>
                
            </div>

            <div className="text-left ">
              
              <div className="text-hotpink mt-5">
                Please review your registration details before submitting
              </div>
                    
              <div className="checkbox">
                <input type="checkbox" 
                id="privacy_policy_accepted" 
                name="privacy_policy_accepted" 
                value={formData.privacy_policy_accepted}
                // checked={isChecked}
                onChange={handleChange}
                required
                />
                <span> </span>I agreed with the event terms and conditions and privacy policy
              </div>
              
            </div>

            <button type="submit" value="submit" className='btn btn-primary gradient-button bg-headingColor my-[10px] p-[10px] w-[150px] rounded mx-[10px]'>
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register