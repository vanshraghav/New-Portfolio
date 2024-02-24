import React from 'react'
import './projects.css'
import { useEffect } from 'react';

const Projects = () => {

  useEffect(() => {
    const windows = document.querySelectorAll('.window');
  
    windows.forEach((window, index) => {
      setTimeout(() => {
        window.classList.add('zoom-in'); 
      }, index * 100);
    });
  }, []);
  

  return (

    <div className='work'>
       <h1> Have a look at my work 💞 💻 </h1>

       <div className="work_cards">

          <div className="window">
            <img src="assets/11.webp" alt="" />
            <h2>Swift Courier Management</h2>
            
            <div className="languages">
              <span id='pink'>Django</span>
              <span id='purple'>MySQL</span>
              <span id='yellow'>JavaScript</span>
            </div>
            
            <br />

            <div className="btn">
              <a href='https://github.com/vanshraghav/CMS_hosted' target='_blank'><i class="ri-github-fill"></i></a>
              <a href='https://swiftcourier.pythonanywhere.com'><i class="ri-links-fill"></i></a>
            </div>
            
          </div>

          <div className="window">
            <img src="assets/12.webp.webp" alt="" />
            <h2>Daily News and Blogs</h2>
            
            <div className="languages">
              <span id='pink'>Django</span>
              <span id='purple'>Rest API</span>
              <span id='yellow'>Javascript</span>
            </div>
            
            <br />

            <div className="btn">
              <a href='#'><i class="ri-github-fill"></i></a>
              <a href='https://dailynewsblogs.pythonanywhere.com/'><i class="ri-links-fill"></i></a>
            </div>
            
          </div>

          <div className="window">
            <img src="assets/10.webp" alt="" />
            <h2>Safar</h2>
            
            <div className="languages">
              <span id='pink'>Html/CSS</span>
              <span id='purple'>Django</span>
              <span id='yellow'>JavaScript</span>
            </div>
            
            <br />

            <div className="btn">
              <a href='https://vanshraghav.github.io/SAFAR/'><i class="ri-github-fill"></i></a>
              <a href='#'><i class="ri-links-fill"></i></a>
            </div>
            
          </div>

          <div className="window">
            <img src="assets/1.webp" alt="" />
            <h2>Tindog</h2>
            
            <div className="languages">
              <span id='pink'>Html</span>
              <span id='purple'>CSS</span>
              <span id='yellow'>JavaScript</span>
            </div>
            
            <br />

            <div className="btn">
              <a href='https://vanshraghav.github.io/Tindog/'><i class="ri-github-fill"></i></a>
              <a href='#'><i class="ri-links-fill"></i></a>
            </div>
            
          </div>

          <div className="window">
            <img src="assets/5.webp" alt="" />
            <h2>Weather App</h2>
            
            <div className="languages">
              <span id='pink'>ReactJS</span>
              <span id='purple'>HTML/CSS</span>
              <span id='yellow'>JavaScript</span>
            </div>
            
            <br />

            <div className="btn">
              <a href='https://github.com/vanshraghav/Myweatherapp'><i class="ri-github-fill"></i></a>
              <a href='#'><i class="ri-links-fill"></i></a>
            </div>
            
          </div>

          <div className="window">
            <img src="assets/2.webp" alt="" />
            <h2>TradeG</h2>
            
            <div className="languages">
              <span id='pink'>Html</span>
              <span id='purple'>CSS</span>
              <span id='yellow'>JavaScript</span>
            </div>
            
            <br />

            <div className="btn">
              <a href='#'><i class="ri-github-fill"></i></a>
              <a href='https://vanshraghav.github.io/TradeG/'><i class="ri-links-fill"></i></a>
            </div>
            
          </div>
          
       </div>

    </div>
  )
}

export default Projects
