import React from 'react'

import Liberty from '../assets/images/sponsors/Liberty.png'
import Liberty2 from '../assets/images/sponsors/Liberty2.png'
import Paybox from '../assets/images/sponsors/Paybox.png'
import VizualPlus from '../assets/images/sponsors/VizualPlus.png'
import Winwise from '../assets/images/sponsors/Winwise.png'
import wisper from '../assets/images/sponsors/wisper.png'

const Partners = () => {
  return (
    <div align="center" className='m-[80px]'>
        <div>
            <div className='text-[30px] font-bold'>Partners and Sponsors</div>
            <div className='text-[15px]'>
                Getlinked Hackathon 1.0 is honored to have the following major 
                companies as its partners and sponsors
            </div>
        </div>

        <div className='m-[50px] p-[100px] border border-textColor rounded'>
            <div>
                <div className='flex justify-center items-center'>
                    <img src={Winwise} alt='' className='m-[10px] w-1/4'/>

                    <div className="border-x-2 border-textColor h-[160px] w-0 m-[10px]"></div>

                    <img src={Liberty2} alt='' className='m-[10px] w-1/4'/>

                    <div className="border-x-2 border-textColor h-[160px] w-0 m-[10px]"></div>

                    <img src={Paybox} alt='' className='m-[10px] w-1/4'/>
                </div>
                
                <div className='flex justify-center items-center'>

                    <div className="border-y-2 border-textColor w-[200px] h-0 m-[10px]"></div>

                    <div className="border-y-2 border-textColor w-[200px] h-0 m-[10px]"></div>

                    <div className="border-y-2 border-textColor w-[200px] h-0 m-[10px]"></div>

                </div>
                
                <div className='flex justify-center items-center'>
                    <img src={wisper} alt='' className='m-[10px] w-1/4'/>

                    <div className="border-x-2 border-textColor h-[160px] w-0 m-[10px]"></div>

                    <img src={VizualPlus} alt='' className='m-[10px] w-1/4'/>

                    <div className="border-x-2 border-textColor h-[160px] w-0 m-[10px]"></div>

                    <img src={Liberty} alt='' className='m-[10px] w-1/4'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners