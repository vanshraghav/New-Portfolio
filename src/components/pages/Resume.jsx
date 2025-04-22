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
            <i className="ri-map-pin-line"></i> Pune | India
          </p>
        </div>

        <div className="buttons info zoom-in">
          <a href="https://github.com/vanshraghav" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-line"></i> Github
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-raghav-6862951b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-line"></i> Linkedin
          </a>
          <a
            href="https://vansh-raghav-resume.tiiny.site/"
            target="_blank"
            download="Vansh_Raghav_Resume.png"
            onClick={showToastMessage}
            rel="noopener noreferrer"
          >
            <i className="ri-file-chart-line"></i> Check My CV
          </a>
        </div>
      </div>

      <div className="right fade-up">
        <div className="experience">
          <h1>Experience</h1>

          <h4>Backend Developer Intern – Core Team @ KiranaPro</h4>
          <p>Remote / Jan 2025 – Present</p>
           <ul>
    <li>
      Handled the entire backend integration of the e-commerce platform and deployed it live on the ONDC network single-handedly.
    </li>
    <li>
      Developed and maintained microservices using Node.js, Express, and MongoDB to support provider onboarding, product listing, and order fulfillment workflows.
    </li>
    <li>
      Implemented API integrations with ONDC protocols and ensured compliance with government-led commerce standards.
    </li>
    <li>
      Managed deployment pipelines and production releases, ensuring minimal downtime and high availability.
    </li>
    <li>
      Collaborated closely with the frontend and QA teams to debug critical issues and improve system reliability.
    </li>
  </ul>
          <h4>Full Stack Software Developer Intern</h4>
          <p>Remote / Oct 2024 - Dec 2024</p>
          <ul>
            <li>
              Transitioned to the MERN stack and contributed to the development of a full-stack e-commerce platform enabling providers to onboard and sell their products on the ONDC network.
            </li>
            <li>
              Gained experience in operating effectively under pressure, delivering results in fast-paced and challenging environments.
            </li>
            <li>
              Acquired hands-on experience with the MERN stack and Flask framework, enhancing my technical proficiency.
            </li>
            <li>
              Developed a comprehensive understanding of the process of building and deploying industry-level applications.
            </li>
          </ul>

          <h4>Full Stack Software Developer Intern</h4>
          <p>Remote / Jan 2024 - Jun 2024</p>
          <ul>
            <li>
              Worked extensively with the MERN stack to develop a full-stack e-commerce platform, enabling providers to onboard and sell their products within the ONDC network.
            </li>
            <li>
              Refined my ability to perform under pressure while contributing to the successful completion of projects in high-demand settings.
            </li>
            <li>
              Gained practical experience in both the MERN stack and Flask framework, enhancing my technical skill set.
            </li>
            <li>
              Developed a strong understanding of how large-scale, industry-grade applications are built and maintained.
            </li>
          </ul>

          <h4>Software Engineer Intern</h4>
          <p>Remote / May 2023 - Jun 2023</p>
          <ul>
            <li>
              Led the development of DATASEG, a state-of-the-art data analysis and segmentation platform, while applying technical expertise to optimize website performance, resulting in improved user engagement and actionable insights.
            </li>
            <li>
              Responsible for implementing data analysis algorithms, enhancing segmentation features, and optimizing overall website performance.
            </li>
            <li>
              Optimized web application performance, reducing page load times by 25% and increasing user engagement by 15% through effective coding and testing.
            </li>
            <li>
              Gained practical experience in developing and maintaining web applications, including optimizing web pages and ensuring the continued functionality of existing systems.
            </li>
          </ul>
        </div>

        <div className="skills">
          <h1> Skills</h1>
          <ul>
            <li>JavaScript / React</li>
            <li>HTML, Bootstrap, CSS</li>
            <li>Django, Express.js, Node.js</li>
            <li>Git / GitHub</li>
            <li>Jira Software</li>
            <li>MongoDB, MySQL, PostgreSQL</li>
          </ul>
        </div>

        <div className="soft-skills">
          <h1> Soft Skills</h1>
          <ul>
            <li>Effective Communication</li>
            <li>Problem Solving</li>
            <li>Adaptability</li>
            <li>Ability to Learn Quickly</li>
            <li>Attention to Detail</li>
            <li>Teamwork & Collaboration</li>
            <li>Critical Thinking</li>
          </ul>
        </div>

        <div className="certificate">
          <h1> Certificates</h1>
          <ul>
            <li>Basics of Python by HackerRank</li>
            <li>Web Dev Bootcamp by Angela Yu</li>
          </ul>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Resume;
