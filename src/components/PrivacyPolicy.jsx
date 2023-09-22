import React from 'react'
import Check from '../assets/images/check.png'
import PrivacyImg from '../assets/images/privacy.png'
import SecurityImg from '../assets/images/security.png'

const PrivacyPolicy = () => {
  return (
    <div className='flex justify-center items-center m-[80px]'>
        <div className='w-1/2 m-[30px]'>
            <div className='my-[10px]'>
                <div className='text-[30px] font-bold'>
                    <div>Privacy Policy and</div>
                    <div className='text-hotpink'>Terms</div>
                </div>
                <p className='text-[#AEAEAE]'>Last updated on September 12, 2023</p>
                <div className='my-[30px]'>
                    Below are our privacy & policy, which outline a lot of goodies. 
                    it’s our aim to always take of our participant
                </div>
            </div>

            <div className='border border-textColor rounded p-[50px] my-[30px] text-[15px]'>
                <div>At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, 
                    and safeguard your data when you participate in our tech 
                    hackathon event. By participating in our event, you consent 
                    to the practices described in this policy.
                </div>
                <div className='my-[20px]'>
                    <div className='text-textColor'>Licensing Policy</div>
                    <div className='my-2 font-bold'>Here are terms of our Standard License:</div>
                    <ul>
                        <li className='flex my-2 justify-center items-center'>
                            <img src={Check} alt='' className='m-1'/>
                            <p className='mx-3'>
                            The Standard License grants you a non-exclusive right to
                            navigate and register for our event
                            </p>
                        </li>
                        <li className='flex my-2 items-center'>
                            <img src={Check} alt='' className='m-1'/>
                            <p className='mx-3'>
                            You are licensed to use the item available at any free source
                            sites, for your project developement
                            </p>
                        </li>
                    </ul>
                    
                    <button className='gradient-button bg-headingColor p-[10px] w-[150px] rounded m-[20px] ml-[100px]'>
                    Read More
                    </button> 
                </div>
            </div>
        </div>
        <div className='w-1/2 m-[30px]'>
            <div className='image-container'>
                <img className='image-background1' src={SecurityImg} alt='' />
                <img className='image-foreground1' src={PrivacyImg} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default PrivacyPolicy