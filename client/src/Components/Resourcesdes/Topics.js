// Topics.js

import React from 'react';
import c2 from '../../images/c2.webp'
import c3 from '../../images/c3.webp'
import c4 from '../../images/c4.webp'
import c5 from '../../images/c5.png'
import cs1 from '../../images/cs1.jpg'
import cs2 from '../../images/cs2.jpg'
import cs3 from '../../images/cs3.jpg'
import p1 from '../../images/p1.png'
import p2 from '../../images/p2.jpg'
import p3 from '../../images/p3.png'
import a1 from '../../images/a1.jpg'
import a2 from '../../images/a2.png'
import a3 from '../../images/a3.png'
import i1 from '../../images/i1.png'
import i2 from '../../images/i2.png'
import i3 from '../../images/i3.png'
import {Link } from 'react-router-dom'


import './Topics.css'
const Topics = () => {
  return (
    <div class="s">
     <h1>What do you want to do Today?</h1>
    <div className="select">
      <div className="edu">
        <div className="box">
          <div className="content">
           <a href="#cssubjects" className="topic-link">
                       <img src={c3} alt="CS Subjects" width="70"/>
                        <div className="topic-text">CS Subjects</div>
                          </a>
          </div>
        </div>
      </div>
    
      <div className="edu">
        <div className="box">
          <div className="content">
           <a href="#programming" className="topic-link">
                       <img src={c4} alt="Programming" width="70"/>
                         <div className="topic-text">Programming</div>
                             </a>
          </div>
        </div>
      </div>
      <div className="edu">
          <div className="box">
             <div className="content">
                  <a href="#aptitude" className="topic-link">
                     <img src={c5} alt="Aptitude" width="70"/>
                         <div className="topic-text">Aptitude</div>
                  </a>
              </div>
           </div>
        </div>
        <div class="edu">
        <div class="box">
          <div class="content">
             <a href="#interview-preparation" className="topic-link">
                       <img src={c2} alt="Interview Preparation" width="70"/>
                         <div className="topic-text">Interview <br></br>Preparation</div>
                   </a>
          </div>
        </div>
      </div>
      {/*part1 end */}
    </div>
    {/*break*/}
    {/*part2 start */}
    <h1>
      CS SUBJECTS
    </h1>
    <div className="select">
      <div className="edu">
        <div className="box">
          <div id="cssubjects">
             <Link to='/oops' className="topic-link">
                       <img src={cs1} alt="oops" width="70"/>
                         <div className="topic-text">Learn OPPs</div>
                   </Link>
          </div>
        </div>
      </div>
    
      <div className="edu">
        <div className="box">
          <div class="content">
           <Link to='/os' className="topic-link">
                       <img src={cs2} alt="os" width="70"/>
                        <div className="topic-text">Learn OS</div>
                        </Link>
          </div>
        </div>
      </div>
    
      <div className="edu">
        <div className="box">
          <div className="content">
          <Link to='/dbms' className="topic-link">
                       <img src={cs3} alt="Programming" width="70"/>
                         <div className="topic-text">Learn DBMS</div>
                            </Link>
          </div>
        </div>
      </div>
     
    </div>
    {/*part2 end */}
    <h1>
    PROGRAMMING
    </h1>
    {/* part3 starts*/}
    <div className="select">
      <div className="edu">
        <div className="box">
          <div id="programming">
             <a href="#dsaquestions" className="topic-link">
                       <img src={p1} alt="dsaquestions" width="70"/>
                         <div className="topic-text">DSA Questions</div>
                   </a>
          </div>
        </div>
      </div>
      <div className="edu">
        <div className="box">
          <div className="content">
           <a href="#Top100codes" className="topic-link">
                       <img src={p2} alt="Top100codes" width="70"/>
                        <div className="topic-text">Top 100 codes</div>
                          </a>
          </div>
        </div>
      </div>
    
      <div className="edu">
        <div className="box">
          <div className="content">
           <Link to='/Learndsa' className="topic-link">
                       <img src={p3} alt="Programming" width="70"/>
                         <div className="topic-text">Learn DSA</div>
              </Link>
          </div>
        </div>
      </div>
    </div>
    {/*part 3 ends */}
      <h1>
        Aptitude
      </h1>
      {/*part 4 starts */}
      <div className="select">
      <div className="edu">
        <div className="box">
          <div id="aptitude">
             <Link to='/Logical' className="topic-link">
                       <img src={a1} alt="Logical" width="70"/>
                         <div className="topic-text">Logical</div>
                  </Link>
          </div>
        </div>
      </div>
      <div className="edu">
        <div className="box">
          <div className="content">
           <Link to='/Quants' className="topic-link">
                       <img src={a2} alt="Quants" width="70"/>
                        <div className="topic-text">Quants</div>
                          </Link>
          </div>
        </div>
      </div>
    
      <div className="edu">
        <div className="box">
          <div className="content">
          <Link to='/DataInterpretation' className="topic-link">
                       <img src={a3} alt="DataInterpretation" width="70"/>
                         <div className="topic-text">Data Interpretation</div>
                            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* part 4 ends*/}
    <h1>Interview Preparation</h1>
    <div className="select">
      <div className="edu">
        <div className="box">
          <div id="interview-preparation">
             <Link to='/resume' className="topic-link">
                       <img src={i1} alt="resume" width="70"/>
                         <div className="topic-text">Resume</div>
                   </Link>
          </div>
        </div>
      </div>
      <div className="edu">
        <div className="box">
          <div className="content">
           <Link to='/interview' className="topic-link">
                       <img src={i2} alt="Technical Interview" width="70"/>
                        <div className="topic-text">Interview</div>
                          </Link>
          </div>
        </div>
      </div>
    
      <div className="edu">
        <div className="box">
          <div className="content">
           <Link to='/puzzels' className="topic-link">
                       <img src={i3} alt="Puzzles" width="70"/>
                         <div className="topic-text">Puzzles</div>
              </Link>
          </div>
        </div>
      </div>
    </div>
    
  </div>

  )
}

export default Topics;
