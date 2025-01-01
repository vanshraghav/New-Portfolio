import React from "react";
import "./Resume.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Resume = () => {
  const showToastMessage = () => {
    toast.success("Thank you for going through my CV ....");
  };

  return (
    <div className="resume">
      <div className="left">
        <div className="info zoom-in">
          <h1>Vansh Raghav</h1>
          <p>Full Stack Web Developer</p>
          <p>vanshraghav2018@gmail.com</p>
          <p>
            <i class="ri-map-pin-line"></i> Pune | India
          </p>
        </div>

        <div className="buttons info zoom-in">
          <a href="https://github.com/vanshraghav" target="_blank">
            <i class="ri-github-line"></i> Github
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-raghav-6862951b2/"
            target="_blank"
          >
            <i class="ri-linkedin-line"></i> Linkedin
          </a>
          <a
            href="https://vansh-raghav-resume.tiiny.site/" target="_blank"
            download="Vansh_Raghav_Resume.png"
            onClick={showToastMessage}
          >
            <i class="ri-file-chart-line"></i> Get My Resume
          </a>
        </div>
      </div>

      <div className="right fade-up">
        <div className="experience">
          <h1>Experience</h1>

          <h4>Full Stack Software Developer Intern</h4>
          <p>Remote / Oct 2024 - Dec 2024</p>
          <ul>
            <li>
              Transitioned to the MERN stack and contributed to the development
              of a full-stack e-commerce platform enabling providers to onboard
              and sell their products on the ONDC network.
            </li>
            <li>
              Gained experience in operating effectively under pressure,
              delivering results in fast-paced and challenging environments.
            </li>
            <li>
              Acquired hands-on experience with the MERN stack and Flask
              framework, enhancing my technical proficiency.
            </li>
            <li>
              Developed a comprehensive understanding of the process of building
              and deploying industry-level applications.
            </li>
          </ul>

          <h4>Full Stack Software Developer Intern</h4>
          <p>Remote / Jan 2024 - Jun 2024</p>
          <ul>
            <li>
              Worked extensively with the MERN stack to develop a full-stack
              e-commerce platform, enabling providers to onboard and sell their
              products within the ONDC network.
            </li>
            <li>
              Refined my ability to perform under pressure while contributing to
              the successful completion of projects in high-demand settings.
            </li>
            <li>
              Gained practical experience in both the MERN stack and Flask
              framework, enhancing my technical skill set.
            </li>
            <li>
              Developed a strong understanding of how large-scale,
              industry-grade applications are built and maintained.
            </li>
          </ul>

          <h4>Software Engineer Intern</h4>
          <p>Remote / May 2023 - Jun 2023</p>
          <ul>
            <li>
              Led the development of DATASEG, a state-of-the-art data analysis
              and segmentation platform, while applying technical expertise to
              optimize website performance, resulting in improved user
              engagement and actionable insights.
            </li>
            <li>
              Responsible for implementing data analysis algorithms, enhancing
              segmentation features, and optimizing overall website performance.
              Collaborated with cross-functional teams to design and implement
              new features that improved functionality and provided valuable
              data insights.
            </li>
            <li>
              Optimized web application performance, reducing page load times by
              25% and increasing user engagement by 15% through effective coding
              and testing.
            </li>
            <li>
              Gained practical experience in developing and maintaining web
              applications, including optimizing web pages and ensuring the
              continued functionality of existing systems.
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
  );
};

export default Resume;
