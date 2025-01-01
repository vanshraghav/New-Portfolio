import { React, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const showToastMessage = () => {
    toast.success("Thank you for going through my CV ....");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error("Please verify the captcha.");
      return;
    }

    setSending(true);

    emailjs.sendForm('service_3ek5xjc', 'template_2yo4fss', e.target, 'dW3K8h0h-3ineGRPJ')
      .then((result) => {
        console.log(result.text);
        toast.success("Thanks for your message, I will contact you soon.");
        e.target.reset();
        setSending(false);
      }, (error) => {
        console.log(error.text);
        toast.error("Failed to send message. Please try again later.");
        setSending(false);
      });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
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
          <a href='https://vansh-raghav-resume.tiiny.site/' download='vansh_resume.pdf' target="_blank" onClick={showToastMessage}><i className="ri-file-chart-line"></i>Check My CV</a>
        </div>
      </div>

      <div className="right-side zoom-in">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder='Name' required />

          <input type="email" name="email" placeholder='Email' required />

          <textarea name="message" placeholder='Message' cols="30" rows="10" required></textarea>

          <ReCAPTCHA
            sitekey="6LfidasqAAAAAJu8nQmXJ10ifcIjRiXRvViBec1-"
            onChange={handleCaptchaChange}
          />

          <button type='submit' disabled={sending}>{sending ? 'Sending...' : 'Send'}</button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
