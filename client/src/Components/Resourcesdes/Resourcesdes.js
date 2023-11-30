// Resourcesdes.js
import React from 'react';
import './Rcss.css'
import coding1 from '../../images/coding1.avif';
import groundhero from '../../images/groundhero.png';
import {Link } from 'react-router-dom';
import Topics from './Topics'
const Resourcesdes = () => {
  return (
    <div className='all'>
      <div className='coding-content'>
         <div className='text1'>
                <h1>
                Explore and expand your skills.
                </h1>
                <p>
                Every idea has a first line of code. Prep for jobs<br>
                </br> and sharpen your skills alongside a global community of developers.<br>
                </br> Access the content you need to develop new skills – and land the job you’ve dreamed of.
                </p>

               <Link to='/Practice'> <button className='btn1'> Start Coding</button>

               </Link>
         </div>
           <div className='img'>
  
                  <img src={coding1} alt=''></img>
           </div>
      </div>
      <div className='main2'>
        <Topics/>
      </div>
    
    </div>
  );
};

export default Resourcesdes;


