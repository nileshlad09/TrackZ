import React, { useState, useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Contact() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="contact-section" id="Contact">
        <div className="contact-section2">
          <h1 data-aos="flip-left">CONTACT US</h1>
          <form
            className="contact-form"
            action="https://formspree.io/f/xeqdrpwg"
            method="POST"
          >
            <div className="input-box">
              <input
                type="text"
                className="contact-form-text"
                placeholder="Your name"
                data-aos="fade-right"
                name="username"
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                className="contact-form-text"
                placeholder="Your email"
                data-aos="fade-left"
                name="email"
              />
            </div>
            <div className="input-box">
              <textarea
                className="contact-form-text"
                placeholder="Your message"
                data-aos="fade-left"
                name="message"
              ></textarea>
            </div>
            <button type="submit" className="contact-form-btn">
              send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
