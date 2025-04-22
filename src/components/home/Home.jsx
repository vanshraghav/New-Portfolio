import React, { useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => { 
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('zoom-in');
      }, index * 100);
    });
  }, []);

  const aboutClick = () => {
    navigate('/about');
  };

  const resumeClick = () => {
    navigate('/resume');
  };

  const projectClick = () => {
    navigate('/projects');
  };

  const contactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      <div className='home'>

        <div className='card' id='about' onClick={aboutClick}>
          <div className="img_box">
            <img src="assets/self-pic.png" alt="" />
          </div>
          <div className="text">
            <h2> Hey, I'm Vansh </h2>

            <div className="desc">
              <p> Full Stack Web Developer </p>
              <span>
                <i className="ri-arrow-right-double-fill"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="card" id='resume' onClick={resumeClick}>
          <i className="ri-file-list-3-line"></i>
          <h2>Resume</h2>
        </div>

        <div className="card" id='project' onClick={projectClick}>
          <i className="ri-mac-line"></i>
          <h2>My Work</h2>
        </div>

        <div className="card" id='contact' onClick={contactClick}>
          <i className="ri-contacts-book-3-line"></i>
          <h2>Contact Me</h2>
        </div>

        <div className="card" id='tech'>
          <h2>Technologies I Like The Most</h2>
          <div className="icons">
            <img src="assets/icons/javascript.svg" alt="" />
            <img src="assets/icons/nodejs.svg" alt="" />
            <img src="assets/icons/html.svg" alt="" />
            <img src="assets/icons/css.svg" alt="" />
            <img src="assets/icons/django.svg" alt="" />
            <img src="assets/icons/flask.svg" alt="" />
            <img src="assets/icons/react.svg" alt="" />
            <img src="assets/icons/express.svg" alt="" />
            <img src="assets/icons/mongodb.svg" alt="" />
            <img src="assets/icons/github.svg" alt="" />

          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
