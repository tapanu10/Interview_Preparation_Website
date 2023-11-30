import React from 'react'
import './MainHomeBar.css'
import {Link} from 'react-router-dom'
import fast from '../../images/fast.png'


const MainHomeBar = () => {
  return (
    <div>
       <div className='home1'>
             <h2 className='h1'>Land your dream job 5x faster than the national average</h2>
             <h1 className='h2'>Try the SkillUp
                    Training Tool</h1>
              <h2 className='h3'>Turning Interviews into Opportunities</h2> 
             <button>
                <Link to='/pricing'className='btn'>Ace Your Interview</Link>
             </button>
        </div>
        <div className='home2'>
                 <h1 className='home2 heading1'>
                      What you’ll get with Skill Up:
                 </h1>
                 <h3 className='home2 heading2'>
                  Everything you need to prepare for interviews and land more job offers.
                 </h3>
          <div className='homecard'>
               <div className='homec1'>
                    <h2>“Fast-Track” interview preparation</h2>
                    <h5>Got only a day to prepare for an interview? Our Fast-<br>
                    </br>Track module will give you all the essentials you need to feel confident.
                    <br></br> Including:
                       Must-know tactics you can master in 2 hours.<br></br>
                       formula for answering all of the most important questions.<br></br>
                        Tips for how to use the job description to make convincing arguments.</h5>
               </div>
               <div className='homec2'>
                  <img src={fast} alt='imag' width="500px"></img>
                  <h5>30-day full refund, no questions asked</h5>
              </div>
          </div>
       </div>
       <div className='home3'>
          
       </div>
    </div>
  )
}

export default MainHomeBar
