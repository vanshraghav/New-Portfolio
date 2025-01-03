import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
       <div className="social-icon">
         <a href="https://www.instagram.com/vanshraghav2018/" target='_blank'><i class="ri-instagram-line"></i></a>
         <a href="https://www.linkedin.com/in/vansh-raghav-6862951b2/" target='_blank'><i class="ri-linkedin-line"></i></a>
         <a href="https://github.com/vanshraghav" target='_blank'><i class="ri-github-line"></i></a>
       </div>
       <div className="line">
        <p>Made With <span><i class="ri-heart-fill"></i></span> by Vansh</p>
       </div>
    </div>
  )
}

export default Footer
