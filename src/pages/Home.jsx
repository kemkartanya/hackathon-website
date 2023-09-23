import React, { useState, useEffect } from 'react';
import Overview from '../components/Overview'
import Timeline from '../components/Timeline'
import Faqs from '../components/Faq/Faqs'
import ManWearingSmartGlasses from '../assets/images/man-wearing-smart-glasses-touching-virtual-screen.png'
import Title from '../assets/images/Title.png'
import vector4 from '../assets/images/Vector 4.png'
import ContentSeparator from '../components/ContentSeperator'
import Image from '../assets/images/Image0.png'
import Prices from '../components/Prices';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Partners from '../components/Partners';
import { NavLink, Link } from 'react-router-dom';

const Home = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className='text-white bg-primaryColor'>
      
      <ContentSeparator />
      <div >
        
        <div align="right" className='p-10 text-white font-bold text-[30px] italic'>
          <h1>Igniting a Revolution in HR Innovation</h1>
          <img src={vector4} alt='' />
        </div>
        
        <div className='flex'>
          <div className='ml-[50px] mt-[30px]'>
            <img src={Title} alt='' />
            <p>Participate in getlinked tech Hackathon 2023 stand <br /> a chance to win a Big price</p>
            
            {/* register button */}
            <Link to='/register'>
            <button className='gradient-button bg-headingColor my-[30px] p-[10px] w-[150px] rounded'>
              Register
            </button> 
            </Link>
            
            <br />

            {/* time  */}
            <div className="clock">
              <span className="time-part">{hours}</span> <span className="unit">H</span>
              <span className="time-space"> </span>
              <span className="time-part">{minutes}</span> <span className="unit">M</span>
              <span className="time-space"> </span>
              <span className="time-part">{seconds}</span> <span className="unit">S</span>
            </div>
         

          </div>
          
          <div className='image-container'>
            <img className='image-background' src={ManWearingSmartGlasses} alt=''/>
            <img className='image-foreground' src={Image} alt='' />
          </div>
        </div>
        
        
      </div>
      <ContentSeparator />
      
      <Overview />
      <ContentSeparator />
      
      <Faqs />
      <ContentSeparator />

      <Timeline />
      <ContentSeparator />

      <Prices />
      <ContentSeparator />

      <Partners />
      <ContentSeparator />

      <PrivacyPolicy />
      <ContentSeparator />

    </div>
  )
}

export default Home