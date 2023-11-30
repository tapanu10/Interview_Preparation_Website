// FeatureSlider.js
import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import f1 from '../../images/f1.avif';

import './FeatureSlider.css';


const FeatureSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    VanillaTilt.init(document.querySelector(".glassmorphic-card"), {
      max: 15,
      speed: 200,
      glare: true,
      "max-glare": 1,
    });

    // Cleanup VanillaTilt on component unmount
  }); 

  return (
    <Slider {...settings}>
      <div className='feature1'>
           <h2>Everyday Contents</h2>
            <div className='mat'>
                   <div className='imgn'>
                      <img src={f1} alt='re' />
                   </div>
               <div class="text">
		                 <h2>START JOURNEY</h2>
		                     <div class="glassmorphic-card">
			                         <div class="imgBox">
			                           	<i class="fa fa-pencil-ruler"></i>
			                          </div>
			                       <div class="contentBox">
			                        	<h3>Code With us</h3>
			              	           <p>"Unlock the code, break the barriers. In the realm of coding competitions, every line is a brushstroke, painting a masterpiece of logic and innovation ...</p>
				                          <a href="#"><span>Read More</span></a>
			                        </div>
	                       	</div>
	               </div>
              </div>
       </div>
       {/*end of feature 1  */} 
        {/* start of feture 2*/} 
     
     <div className='feature 2'>
         <h2>
         Courses
            </h2>
            <div class="cards">
    <div class="card cards__item">
      <div class="card__frame">
        <div class="card__picture">
          <img src="https://image.flaticon.com/icons/svg/1496/1496034.svg" alt="" width="120"/>
        </div>
        <h2 class="card__title">DSA</h2>
      </div>
      <div class="card__overlay"></div>
      <div class="card__content">
        <h2>DSA</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum veritatis id quia cupiditate sed architecto aliquam nostrum unde nam minima voluptas dicta, beatae sint reprehenderit sit ducimus officiis ratione?</p>
      </div>
    </div>
    <div class="card cards__item">
      <div class="card__frame">
        <div class="card__picture">
          <img src="https://image.flaticon.com/icons/svg/1336/1336494.svg" alt="" width="120"/>
        </div>
        <h2 class="card__title">CS SUBJECTS</h2>
      </div>
      <div class="card__overlay"></div>
      <div class="card__content">
        <h2>CS subjects</h2>
        <p>Dignissimos ipsam culpa vitae vel hic harum omnis doloremque debitis laudantium neque quos iure voluptates quidem ratione esse modi, rerum illum facere eius accusantium dolorem incidunt beatae officiis voluptatem? Nostrum.</p>
      </div>
    </div>
    <div class="card cards__item">
      <div class="card__frame">
        <div class="card__picture">
          <img src="https://image.flaticon.com/icons/svg/478/478543.svg" alt="" width="120"/>
        </div>
        <h2 class="card__title">WEBDEV</h2>
      </div>
      <div class="card__overlay"></div>
      <div class="card__content">
        <h2>WEB-DEV</h2>
        <p>Asperiores, harum dignissimos at neque quaerat, excepturi, ipsa in consectetur blanditiis tempore error! Libero fuga possimus qui saepe temporibus praesentium, ut ratione facere rem distinctio, beatae omnis officiis illum animi.</p>
      </div>
    </div>
    
     <div class="card cards__item">
      <div class="card__frame">
        <div class="card__picture">
          <img src="https://image.flaticon.com/icons/svg/478/478543.svg" alt="" width="120"/>
        </div>
        <h2 class="card__title">WEBDEV</h2>
      </div>
      <div class="card__overlay"></div>
      <div class="card__content">
        <h2>WEB-DEV</h2>
        <p>Asperiores, harum dignissimos at neque quaerat, excepturi, ipsa in consectetur blanditiis tempore error! Libero fuga possimus qui saepe temporibus praesentium, ut ratione facere rem distinctio, beatae omnis officiis illum animi.</p>
      </div>
    </div>
    <div class="card cards__item">
      <div class="card__frame">
        <div class="card__picture">
          <img src="https://image.flaticon.com/icons/svg/478/478543.svg" alt="" width="120"/>
        </div>
        <h2 class="card__title">WEBDEV</h2>
      </div>
      <div class="card__overlay"></div>
      <div class="card__content">
        <h2>WEB-DEV</h2>
        <p>Asperiores, harum dignissimos at neque quaerat, excepturi, ipsa in consectetur blanditiis tempore error! Libero fuga possimus qui saepe temporibus praesentium, ut ratione facere rem distinctio, beatae omnis officiis illum animi.</p>
      </div>
    </div>
    <div class="card cards__item">
      <div class="card__frame">
        <div class="card__picture">
          <img src="https://image.flaticon.com/icons/svg/478/478543.svg" alt="" width="120"/>
        </div>
        <h2 class="card__title">WEBDEV</h2>
      </div>
      <div class="card__overlay"></div>
      <div class="card__content">
        <h2>WEB-DEV</h2>
        <p>Asperiores, harum dignissimos at neque quaerat, excepturi, ipsa in consectetur blanditiis tempore error! Libero fuga possimus qui saepe temporibus praesentium, ut ratione facere rem distinctio, beatae omnis officiis illum animi.</p>
      </div>
    </div>
    
     </div>
     </div>
    
    <div>
    <h1>hello</h1>
      <div>
      <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         Mock Test
        </div>
      </a>
    </div>
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
           Resume Guidance
        </div>

  
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        FeedBack 
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
         Community
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Motion Design
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Front-end development&#160;+ jQuery&#160;+ CMS
        </div>
      </a>
    </div>
  </div>
</div>
      </div>
    </div>
    </Slider>
  );
};

export default FeatureSlider;
