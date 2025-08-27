import emailjs from 'emailjs-com';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      toast.error('Please fill out all fields before submitting.');
      return;
    }
    emailjs.sendForm('service_et0se6j', 'template_sh1jh1p', e.target, 'RBj4TcD9NRorjh-OS')
      .then((result) => {
        // eslint-disable-next-line
        console.log(result.text);
        toast.success('Email sent successfully!');
      }, (error) => {
        // eslint-disable-next-line
        console.log(error.text);
        toast.error('Failed to send email. Please try again.');
      });
    e.target.reset();
  }

  return (
    <div>
      <div className="contactContainer" id="contact">
        <div className="contentContainer">
          <h1 className="contactMe">Contact Me</h1>
          <form className="formContainer" onSubmit={sendEmail}>
            <div className="input-group">
              <input type="text" className="nameInput" placeholder="Full Name" name="name" />
            </div>
            <div className="input-group">
              <input type="email" className="emailInput" placeholder="Email Address" name="email" />
            </div>
            <div className="input-group">
              <textarea className="messageTextArea" id="" cols="30" rows={window.innerWidth > 490 ? 8 : 6} placeholder="Your message" name="message" />
            </div>
            <input type="submit" className="submitButton" value="Send Message" />
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
    </div>
  );
}
export default Contact;
