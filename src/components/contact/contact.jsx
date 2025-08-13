import React, { useState } from 'react';
import './contact.css';
import theme_img from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);

    formData.append('access_key', 'c8ce7b7d-91c4-45a2-ad9a-7a14f28453e8');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert('Form Submitted Successfully ✅');
        event.target.reset();
      } else {
        console.error('Error:', data);
        alert(data.message || 'Submission failed ❌');
      }
    } catch (error) {
      console.error('Network Error:', error);
      alert('Network error. Please try again later.');
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_img} alt="Theme" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm a MERN stack developer and IoT enthusiast passionate about building smart, scalable solutions that blend hardware and software. With hands-on experience in React, FastAPI, and embedded systems, I love turning ideas into impactful tech.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>pt022802@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Shahpura (Bhitoni), Jabalpur</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <p>+91-6261680834</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter Your Name" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter Your Email" required />

          <label>Write Your Message Here</label>
          <textarea name="message" rows="8" placeholder="Enter Your Message" required></textarea>

          <button type="submit" className="contact-submit">
            Submit
          </button>

          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;