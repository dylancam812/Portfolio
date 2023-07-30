import emailjs from 'emailjs-com';
import React from 'react';
import './contact.css';

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_k2rqufo', 'template_214ugow', e.target, '0NiA-BOihvWLlqQRV')
      .then((result) => {
        // eslint-disable-next-line
        console.log(result.text);
      }, (error) => {
        // eslint-disable-next-line
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div className="contactContainer" id="contact">
      <div className="contentContainer">
        <h1 className="contactMe">Contact Me</h1>
        <form className="formContainer" onSubmit={sendEmail}>
          <div className="input-group">
            <input type="text" className="nameInput" placeholder="Name" name="name" />
          </div>
          <div className="input-group">
            <input type="email" className="emailInput" placeholder="Email Address" name="email" />
          </div>
          <div className="input-group">
            <textarea className="messageTextArea" id="" cols="30" rows="8" placeholder="Your message" name="message" />
          </div>
          <input type="submit" className="submitButton" value="Send Message" />
        </form>
      </div>
    </div>
  );
}
export default Contact;
