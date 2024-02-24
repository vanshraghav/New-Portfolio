import React from 'react'
import './Resume.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Resume = () => {
 
    const showToastMessage = () => {
      toast.success("Thanks for Downloading my resume...");
      
    };
  
  return (
    <div className='resume'>

      <div className="left">

         <div className="info zoom-in">
            <h1>Vansh Raghav</h1>
            <p>Full Stack Web Developer</p>
            <p>vanshraghav2018@gmail.com</p>
            <p><i class="ri-map-pin-line"></i> Pune | India</p>
         </div>

        <div className="buttons info zoom-in">
         <a href='https://github.com/vanshraghav' target='_blank'><i class="ri-github-line"></i> Github</a>
         <a href='https://www.linkedin.com/in/vansh-raghav-6862951b2/' target='_blank'><i class="ri-linkedin-line"></i> Linkedin</a>
         <a href='assets/Vansh_Raghav_Resume.pdf' download='vansh_resume.pdf' onClick={showToastMessage}><i class="ri-file-chart-line"></i>Download Resume</a>

        </div>  
        
      </div>

      <div className="right fade-up">

      <div className="exprience">
      <h1>Experience</h1>
         <h4>Full Stack Web Developer Intern</h4>
         <p>Remote / JAN-2024 - present</p>
          <ul>
            <li>Shifted to MERNG stack, and worked on a full-stack web application, which is a e-commerce platform that allows providers to onboard and sell their products on ONDC network.
            </li>

            <li>Acquired valuable experience in operating effectively
            under pressure within challenging work environments.  
            </li>

            <li>Got hands-on experience with MERN stack as well as flask framework .
            </li>

            <li>Gained clear understanding of how the industry level applications are made
            </li>
          </ul>

          <br /><br />
          <h4>Software Engineer Intern</h4>
         <p>Remote / MAY-2023 - JUN-2023</p>
          <ul>
            <li>Led the creation of DATASEG, a cutting-edge data analysis and segmentation website, while working as a Software Engineer
Intern at Deepzest; implemented technical expertise to optimize performance, resulting in increased user engagement and actionable
insights.
            </li>

            <li>Specifically, the tasks included implementing data analysis algorithms, enhancing segmentation capabilities, and optimizing
website performance. Had collaborated with teams to design and develop features that improved the website's functionality and
provided insightful data analysis results to users.
            </li>

            <li>Constructed and optimized web applications using diverse technologies, resulting in a 25% reduction in page load time and a
15% increase in user engagement.
            </li>

            <li>Gained experience in developing and maintaining web applications, including creating and optimizing web pages, and maintaining existing once
            </li>
          </ul>
      </div>  
        
        <div className="skills">
          <h1> Skills</h1>
            <ul>
              <li>JavaScript / React </li>
              <li>Html, Bootstrap, CSS,</li>
              <li>DJango, Express JS, Node JS</li>
              <li>Git / Github</li>
              <li>Jira Software</li>
              <li>Mongo DB, MySql, PostgreSQL</li>
            </ul>
        </div>
         
 
      <div className="soft-skills">
          <h1> Soft Skills</h1>
              <ul>
                <li> Effective communication </li>
                <li>Problem solving</li>
                <li>Adaptility</li>
                <li>Ability to learn quickly</li>
                <li>Attention to details</li>
                <li>Team work & collaboration</li>
                <li>Critical thinking</li>
              </ul>
      </div>
          
      <div className="certificate">
           <h1> Certificates</h1>
           <ul>
            <li>Basics of Python by HackerRank </li>
            <li>Web Dev Bootcamp by Angela Yu </li>
         
           </ul>

      </div>
          
      </div>
      <ToastContainer />
    </div>
    
  )
}

export default Resume
