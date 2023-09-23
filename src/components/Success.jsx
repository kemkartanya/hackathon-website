import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import CongratulationsImg from '../assets/images/congratulation.png'

const Success = () => {
  return (
    <div align="center" className='bg-primaryColor'>
        <div className='border border-textColor rounded text-white w-[700px]'>
            <img src={CongratulationsImg} alt='' />
            <div className='text-[30px]'>Congratulations <br /> 
            you have successfully Registered!</div>
            <div className='m-5'>
            Yes, it was easy and you did it! <br />
            check your mail box for next step
            </div>

            <Link to="/register">
              <button className='gradient-button bg-headingColor m-[30px] p-[10px] w-[600px] rounded'>
                Back
              </button> 
            </Link>
        </div>
    </div>
  )
}

export default Success