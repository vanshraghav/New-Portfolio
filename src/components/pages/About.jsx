import React from 'react'
import './About.css'
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    const mainHeading = document.querySelector('.main-heading');
    const paragraphs = document.querySelectorAll('.about p');
    const icons = document.querySelectorAll('.icons');

    mainHeading.classList.add('zoom-in');

    paragraphs.forEach((paragraph, index) => {
      setTimeout(() => {
        paragraph.classList.add('zoom-in');
      }, index * 100);
    });

    icons.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add('zoom-in');
      }, index * 100);
    });
  }, []);
   

  return (
    <div className='about'>
      <h1 className='main-heading'> About Me </h1>
      <p>
        I am Vansh. A self taught Full stack web Developer💻.I was interested in computers from childhood,so I persued my career in software development. I don't like to be language specific, I love working 🔨💡 in different languages and exploring new stuff 🚀.
         <br /><br /><br />
        Here are some technologies I am good at:
      </p>
      <div className="icons">
                <img src="src\assets\icons\javascript.svg" alt="" />
                <img src="src\assets\icons\html.svg" alt="" />
                <img src="src\assets\icons\css.svg" alt="" />
                <img src="src\assets\icons\react.svg" alt="" />
                
                <img src="src\assets\icons\nodejs.svg" alt="" />
                <img src="src\assets\icons\express.svg" alt="" />
                <img src="src\assets\icons\mongodb.svg" alt="" />
                <img src="src\assets\icons\github.svg" alt="" />

       </div>
    </div>
  )
}

export default About
