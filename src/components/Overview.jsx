import React from 'react'
import BigIdea from '../assets/images/The big idea.png'
import ContentSeparator from '../components/ContentSeperator'
import RulesImg from '../assets/images/rules.png'
import JudgingImg from '../assets/images/judging.png'


const Overview = () => {
  return (
    <div className='text-white bg-primaryColor'>  
        <div className='flex px-[100px] py-[30px] justify-center items-center'> 

            <img src={BigIdea} alt='' className='w-1/2'/>

            <div className='ml-[50px]'>

                <div className='text-[25px] font-bold'>
                    <h1>Introduction to getlinked</h1>
                    <h1 className='text-textColor'>techHackathon1.0</h1>
                </div>

                <div className='my-[15px] text-[15px]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </div>
            </div>
        </div>
        
        <ContentSeparator />

        <div className='flex mx-[100px] my-[30px] justify-center items-center'>
            
            <div  className='ml-[50px]'>
                <div className='text-[25px] font-bold'>
                    <h1>Rules and </h1>
                    <h1 className='text-textColor'>Guidelines</h1>
                </div>

                <div className='my-[15px] text-[15px]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </div>
            </div>
            
            <img src={RulesImg} alt='' className='w-1/2'/>
            
        </div>

        <ContentSeparator />

        <div className='flex mx-[80px] py-[30px] justify-center items-center'> 

            <img src={JudgingImg} alt='' className='w-1/2'/>

            <div className='ml-[40px]'>

                <div className='text-[25px] font-bold'>
                    <h1>Judging Criteria</h1>
                    <h1 className='text-textColor'>Key attributes</h1>
                </div>

                <div className='my-[15px] text-[15px]'>
                    <span className='text-hotpink font-bold'>Innovation and Creativity: </span>
                    Evaluate the uniqueness and creativity of the
                    solution. Consider whether it addresses a real-world problem in a novel 
                    way or introduces innovative features.
                </div>

                <div className='my-[15px] text-[15px]'>
                    <span className='text-hotpink font-bold'>Functionality: </span>
                    Assess how well the solution works. Does it perform its 
                    intended functions effectively and without major issues? Judges would
                    consider the completeness and robustness of the solution.
                </div>

                <div className='my-[15px] text-[15px]'>
                    <span className='text-hotpink font-bold'>Impact and Relevance: </span>
                    Determine the potential impact of the solution 
                    in the real world. Does it address a significant problem, and is it relevant 
                    to the target audience? Judges would assess the potential social, 
                    economic, or environmental benefits.
                </div>

                <div className='my-[15px] text-[15px]'>
                    <span className='text-hotpink font-bold'>Innovation and Creativity: </span> 
                    Technical Complexity: Evaluate the technical sophistication of the solution. 
                    Judges would consider the complexity of the code, the use of advanced 
                    technologies or algorithms, and the scalability of the solution.
                </div>

                <div className='my-[15px] text-[15px]'>
                    <span className='text-hotpink font-bold'>Adherence to Hackathon Rules: </span> 
                    Judges will Ensure that the team adhered 
                    to the rules and guidelines of the hackathon, including deadlines, use of 
                    specific technologies or APIs, and any other competition-specific requirements.
                </div>

                <button className='gradient-button bg-headingColor p-[10px] w-[150px] rounded'>
                Read More
                </button> 
            </div>
        </div>
        
        
    </div>
  )
}

export default Overview