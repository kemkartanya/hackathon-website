import React from 'react'
import FaqImg from '../../assets/images/Faq.png'
import FaqList from './FaqList'

const Faqs = () => {
  return (
    <div className='flex px-[100px] py-[30px] justify-center items-center bg-primaryColor text-white'>
            
        <div  className='ml-[50px]'>
            <div className='text-[25px] font-bold'>
                <h1>Frequently Asked</h1>
                <h1 className='text-textColor'>Questions</h1>
            </div>

            <div className='my-[15px] text-[15px]'>
              <div>
                We got answers to the questions that you might
                want to ask about getlinked Hackathon 1.0
              </div>

              <FaqList />
              
            </div>
        </div>
        
        <img src={FaqImg} alt='' className='w-1/2'/>
        
    </div>
  )
}

export default Faqs