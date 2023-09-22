import React from 'react'

const Timeline = () => {
  return (
    <div align="center" className='p-[30px] bg-primaryColor text-white'>
      <div>
        <h1 className='text-[25px] font-bold'>Timeline</h1>
        <p className='text-[15px]'>Here is the breakdown of the time we anticipate <br />
          using for the upcoming event.</p>
      </div>

      <div className='flex text-[15px] m-[30px]'>
        <div>
          <div className='m-[40px] mt-[100px] text-right'>
            <h1 className='text-textColor font-bold'>Hackathon Annnouncement</h1>
            <p>
              The getlinked tech hackathon 1.0 is formally announced 
              to the general public and teams begin to get ready to register
              </p>
          </div>

          <div className='text-textColor m-[40px] mt-[100px] font-bold text-right'>November 18, 2023</div>

          <div className='m-[40px] mt-[100px] text-right'>
            <h1 className='text-textColor font-bold'>Teams Registration ends</h1>
            <p>
              Interested Participants are no longer Allowed to <br /> register
            </p>
          </div>

          <div className='text-textColor m-[40px] mt-[100px] font-bold text-right'>November 18, 2023</div>

          <div className='m-[40px] text-right mt-[100px]'>
            <h1 className='text-textColor font-bold'>Getlinked Hackathon 1.0 Officially Begins</h1>
            <p>
            Accepted teams can now proceed to build their
            ground breaking skill driven solutions
            </p>
          </div>

          <div className='text-textColor m-[40px] mt-[100px] font-bold text-right'>November 18, 2023</div>

          
        </div>

        {/* middle time-line */}
        <div className=''>
          <div className="border-x-2 border-textColor h-[100px] w-0"></div>
          <div className="circle p-2 m-3">1</div>

          <div className="border-x-2 border-textColor h-[80px] w-0"></div>
          <div className="circle p-2 m-3">2</div>

          <div className="border-x-2 border-textColor h-[80px] w-0"></div>
          <div className="circle p-2 m-3">3</div>

          <div className="border-x-2 border-textColor h-[80px] w-0"></div>
          <div className="circle p-2 m-3">4</div>

          <div className="border-x-2 border-textColor h-[80px] w-0"></div>
          <div className="circle p-2 m-3">5</div>

          <div className="border-x-2 border-textColor h-[80px] w-0"></div>
          <div className="circle p-2 m-3">6</div>

        </div>

        <div>
          <div className='text-textColor m-[40px] mt-[120px] text-left font-bold'>November 18, 2023</div>

          <div className='m-[40px] mt-[100px] text-left'>
            <h1 className='text-textColor font-bold'>Teams Registration begins</h1>
            <p>
            Interested teams can now show their interest in the
            getlinked tech hackathon 1.0 2023 by proceeding to register
            </p>
          </div>

          <div className='text-textColor m-[40px] mt-[100px] text-left font-bold'>November 18, 2023</div>

          <div className='m-[40px] mt-[100px] text-left'>
            <h1 className='text-textColor font-bold'>Annnouncement of the accepted teams and ideas</h1>
            <p>
            All teams whom idea has been accepted into getlinked tech
            hackathon 1.0 2023 are formally announced
            </p>
          </div>

          <div className='text-textColor m-[40px] mt-[100px] text-left font-bold'>November 18, 2023</div>

          <div className='m-[40px] mt-[100px] text-left'>
            <h1 className='text-textColor font-bold'>Demo Day</h1>
            <p>
            Teams get the opportunity to pitch their projects to judges.
            The winner of the hackathon will also be announced on
            this day
              </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Timeline