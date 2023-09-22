import React from 'react'
import AwardImg from '../assets/images/award.png'
import GoldMedal from '../assets/images/gold_medal.png'
import SilverMedal from '../assets/images/silver_medal.png'
import BronzeMedal from '../assets/images/bronze_medal.png'

const Prices = () => {
  return (
    <div className='m-[30px] text-white flex justify-center items-center'>
        <img src={AwardImg} alt='' className='w-1/3 m-[20px]'/>
        <div className='text-left'>
            <div className='ml-[150px]'>
                <div className='text-[30px] font-bold'>
                    <h1>Prices and</h1>
                    <h1 className='text-textColor'>Rewards</h1>
                </div>
                
                <div className='my-3'>
                    Highlight of the prizes or rewards for winners and
                    for participants.
                </div>
            </div>

            <div className='flex justify-center items-center my-[50px] mt-[150px]'>
                
                {/* 2nd prize */}
                <div className='m-[10px] relative'>
                    <img src={SilverMedal} alt='' className='absolute bottom-[130px] z-20' />
                    <div className='border-2 border-hotpink rounded text-center p-[20px] py-[30px] font-bold h-[200px] relative z-10'>
                        <div className='text-[25px] mt-[50px]'>2nd</div>
                        <div>Runner</div>
                        <div className='text-hotpink text-[20px]'>N300,000</div>
                    </div>
                </div>

                {/* 1st prize */}
                <div className='m-[10px] relative'>
                    <img src={GoldMedal} alt='' className='absolute bottom-[150px] z-20' />
                    <div className='border-2 border-textColor rounded text-center p-[20px] py-[30px] font-bold h-[200px] relative z-10'>
                        <div className='text-[25px] mt-[50px]'>1st</div>
                        <div>Runner</div>
                        <div className='text-textColor text-[20px]'>N400,000</div>
                    </div>
                </div>

                {/* 3rd prize */}
                <div className='m-[10px] relative'>
                    <img src={BronzeMedal} alt='' className='absolute bottom-[120px] z-20' />
                    <div className='border-2 border-hotpink rounded text-center p-[20px] py-[30px] font-bold h-[200px] relative z-10'>
                        <div className='text-[25px] mt-[50px]'>3rd</div>
                        <div>Runner</div>
                        <div className='text-hotpink text-[20px]'>N150,000</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Prices