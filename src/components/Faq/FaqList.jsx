import React from 'react'
import { faqs } from '../../assets/data/faqs';
import FaqItem from './FaqItem';

const FaqList = () => {
  return (
    <ul className='my-[30px]'>
        {faqs.map((item, index)=> <FaqItem item={item} key={index} />)}
    </ul>
  )
}

export default FaqList