import React from 'react'
import './Aboutdes.css'
import FeatureSlider from './FeatureSlider';
const Aboutdes = () => {
  return (
    <div className='Aboutcard1'>
        <div className='Aboutcard2'>
          <div className='misson'>
                <h2>
                  Our Missson
                </h2>
                <h3>
                Our mission is to transform the interview process <br></br>into and opportunity for candidates
                 to showcase their true potential. <br></br>We provide innovative tools and resources that 
                 <br></br> empower individuals to excel in interviews and advance their professional aspirations
                </h3>
                <h3>
                At SkillUp, we are on a mission to innovate interview preparation,<br></br> 
                making it an enriching experience<br></br> that fuels career excellence. Our goal is to revolutionize<br></br>
                 how individuals prepare for interviews<br></br> and set the stage for their professional success.
                </h3>
          </div>
          <div className='vision'>
                   <h2>
                    Our Vision
                   </h2>
                   <h3>
                   Our vision is to be the global leader in interview preparation,<br>
                   </br> empowering individuals worldwide with the skills and confidence to excel in interviews,<br>
                   </br>unlocking doors to a world of professional opportunities.
                   </h3>
                   <h3>
                   We envision a future where talent seamlessly connects with <br></br>
                   opportunities through strategic interviewing. Our vision is to build <br></br>
                   a platform that serves as the bridge between candidates and<br></br>
                    their dream careers, making strategic interviewing <br></br>a cornerstone of success.
                   </h3>
              </div>
         </div> 
         <div className='Features'>
                   <h2>Features</h2>
                    <FeatureSlider />
          </div>
          <div className='why'>
          <div className='h'>
             <h1>Why you should try it?</h1>
             </div>
          </div>
  
       </div>
  )
}

export default Aboutdes
