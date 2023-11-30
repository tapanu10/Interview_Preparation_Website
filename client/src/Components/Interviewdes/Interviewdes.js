import React from 'react';
import './Interviewdes.css'
import inter from '../../images/inter.jpg'
const Interviewdes = () => {
// interviewRoadmap.js


  // Print the Roadmap
  


  return (
    <div className='interview'>
         <div className='interviewcard1'>
              <h1>How To Prepare For An Interview?</h1>
               <p>Interviews are the most important round of placements. It is the final metric on which whether you are selected or not. Hence, interview preparation is crucial if you are preparing<br></br> for placements. Interviews are mainly divided into four rounds;-</p>
               <span>•Technical Interview</span> <br></br>
               <span>•HR Interview Interview</span><br></br>
               <span>•Managerial Interview</span><br></br>
            <p>On this page, you will find complete information and details about all of the interview rounds, and more.</p>
         </div>
         <div className='interviewcard2'>
                <img src={inter} alt="ss" width="1000"></img>
         </div>
         <div className='interviewcard4'>
              
         </div>
         <div className='interviewcard3'>
          <h1>Interview Tips</h1>
           <div class="row1">
                  <div class="col-md-4 col-sm-6 content-card">
                      <div class="card-big-shadow">
                           <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                              <div class="content">
                                 <h6 class="category">Tip No.1</h6>
                                     <h4 class="title"> Research the Company</h4>
                                        <p class="description">Understand the company's mission, values, products/services, and recent news. </p>
                              </div>
                          </div> 
                       </div>
                   </div>
    
                   <div class="col-md-4 col-sm-6 content-card">
                        <div class="card-big-shadow">
                            <div class="card card-just-text" data-background="color" data-color="green" data-radius="none">
                                <div class="content">
                                      <h6 class="category">Tip No.2</h6>
                                         <h4 class="title">Know Your Resume</h4>
                                    <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                                </div>
                              </div>
                          </div>
                    </div>
    
                   <div class="col-md-4 col-sm-6 content-card">
                          <div class="card-big-shadow">
                                <div class="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                                   <div class="content">
                                       <h6 class="category">Tip No.3</h6>
                                            <h4 class="title">Prepare for Common Questions</h4>
                                                <p class="description">Use the STAR method (Situation, Task, Action, Result) to structure your answers. </p>
                                    </div>
                                 </div> 
                           </div>
                     </div>
                </div>
          <div class ="row2">
                     <div class="col-md-4 col-sm-6 content-card">
                          <div class="card-big-shadow">
                                <div class="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                                     <div class="content">
                                            <h6 class="category">Tip No.4</h6>
                                            <h4 class="title">Ask Questions</h4>
                                            <p class="description">Have thoughtful questions prepared for the interviewer to show your interest in the role and company. </p>
                                      </div>
                                  </div> 
                           </div>
                       </div>
    
                     <div class="col-md-4 col-sm-6 content-card">
                           <div class="card-big-shadow">
                                  <div class="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                       <div class="content">
                                            <h6 class="category">Tip No.5</h6>
                                             <h4 class="title">Be Positive</h4>
                                             <p class="description">Stay positive and focused on your strengths and achievements. </p>
                                       </div>
                                   </div> 
                             </div>
                      </div>
    
                    <div class="col-md-4 col-sm-6 content-card">
                        <div class="card-big-shadow">
                             <div class="card card-just-text" data-background="color" data-color="orange" data-radius="none">
                                  <div class="content">
                                           <h6 class="category">Tip No.6</h6>
                                            <h4 class="title">Follow the 90-Second Rule</h4>
                                             <p class="description">Keep your responses concise, aiming for about 90 seconds per answer. </p>
                                  </div>
                              </div> 
                          </div>
                     </div>
                 </div>
         </div>
         <div className='interviewcard4'>

         </div>
    </div>
  )
}

export default Interviewdes
