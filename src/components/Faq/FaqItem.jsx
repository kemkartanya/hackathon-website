import React from 'react'
import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const FaqItem = ({ item }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordian = ()=>{
        setIsOpen(!isOpen)
    }

  return (
    <div className='lg:p-3 border-b border-solid border-hotpink cursor-pointer'>
        
        <div className='flex items-center justify-between' onClick={toggleAccordian}>
            <h4 className='text-[15px] text-white'>
                {item.question}
            </h4>
            
            <div className={`${
                isOpen && "bg-primaryColor text-white border-none"
            } w-7 h-7 flex
            items-center justify-center`}>
                {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
        </div>

        {isOpen && (
            <div className='mt-4'>
                <p className='text-[15px] leading-6 lg:text-[15px] lg:leading-7 font-[400] text-textColor'>
                    {item.content}
                </p>
            </div>
        )}

    </div>
  )
}

export default FaqItem