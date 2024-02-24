import {React,useState} from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const showToastMessage = () => {
    toast.success("Thanks for Downloading my resume...");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm('service_3ek5xjc', 'template_2yo4fss', e.target, 'dW3K8h0h-3ineGRPJ')
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent successfully! I will contact you soon.");
        e.target.reset(); 
        setSending(false);
      }, (error) => {
        console.log(error.text);
        toast.error("Failed to send message. Please try again later.");
        setSending(false);
      });
  };

  return (
    <div className='contact'>
      <div className="left fade-up">
        <div className="info">
          <h1>Vansh Raghav</h1>
          <a href="mailto:vanshraghav2018@gmail.com"><i className="ri-mail-send-line"></i> Email Me</a>
          <p><i className="ri-map-pin-line"></i> Pune | India</p>
        </div>

        <div className="buttons info">
          <a href='https://github.com/vanshraghav' target='_blank'><i className="ri-github-line"></i> Github</a>
          <a href='https://www.linkedin.com/in/vansh-raghav-6862951b2/' target='_blank'><i className="ri-linkedin-line"></i> Linkedin</a>
          <a href='/src/assets/Vansh_Raghav_Resume.pdf' download='vansh_resume.pdf' onClick={showToastMessage}><i className="ri-file-chart-line"></i>Download Resume</a>
        </div>
      </div>

      <div className="right-side zoom-in">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder='Name' required />

          <input type="email" name="email" placeholder='Email' required />

          <textarea name="message" placeholder='Message' cols="30" rows="10" required></textarea>

          <button type='submit' disabled={sending}>{sending ? 'Sending...' : 'Send'}</button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
