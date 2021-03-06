import './Contact.css'

import React, { useEffect, useState } from 'react'

import Swal from 'sweetalert2'
import emailjs from "emailjs-com";

const Contact = () => {
  const [date, setdate] = useState()


  useEffect(() => {
    let date = new Date().getFullYear()
    setdate(date)
  }, [])


  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_itwzkjm",
        "template_7mgo3hj",
        e.target,
        "user_KoXVkTMGlIdTdQgNSOyw6"
      )
      .then((res) => {
        // console.log(res);
        Swal.fire({
          title: 'Message Sent',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: 'Oops! Some error occurred',
          text: 'Please try again later',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      }

      );

    e.target.reset();
  
};

return (
  <>
  <div className='footer-bg'>
      
    <h1 className="footer-head">Contact Us</h1>
    <section id="footer" className="container" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"  >
      <div className="footer-contact">
        <div className="mobileContainer">

          <p className="mobile">
            <i className="fas fa-phone fa-1x"></i>
            <a href="tel:+917414027000 ">+91 7414027000 </a>
          </p>

          <p className="mobile">
            <i className="fas fa-phone fa-1x"></i>
            <a href="tel:+918094818740 ">+91 8094818740 </a>
          </p>

          <p className="mobile">
            <i className="fas fa-phone fa-1x"></i>
            <a href="te:+1(501)386-0787">+1 (501)386-0787</a>
          </p>
        </div>

        <p className="email-footer">
          <i className="fas fa-envelope"></i>{" "}
          <a href="mailto:connect@arcticdevs.com">connect@arcticdevs.com</a>
        </p>

        <div className="socials">
          <a href="https://www.facebook.com/arcticdevs/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-square fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/arctic_devs/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/arctic-devs/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="footer-msg">
        <form onSubmit={sendMail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
           
          />
          <input
            type="text"
            name="user_email"
            placeholder="Enter your email ID"
            required
           
          />
          <textarea
            id=""
            cols="30"
            rows="5"
            name="message"
            placeholder="Message"
            required
            
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>

    <div className="copyright">
      <i className="far fa-copyright me-2 pt-1"></i> {date} - <a href="https://arcticdevs.com" rel="noreferrer" className="ms-2 text-white">Arctic Devs</a>
    </div>
    </div>
  </>
);
}

export default Contact

