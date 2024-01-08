import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xk550kf', 'template_cxs07cg', form.current, '-TblK8YUhQRb0XcCu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset()
    };
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>jure.seselj@gmail.com</h5>
              <a href="mailto:jure.seselj@gmail.com">Send a message</a>
            </article>
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <h5>Jure Seselj</h5>
              <a href="https://www.linkedin.com/in/jure-seselj-062654192/">
                Send a message
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
};

export default Contact;