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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <h1 className="footer-head">Contact Us</h1>
    <section id="footer" className="container">
      <div className="footer-contact">
        <div className="mobileContainer">

          <p className="mobile">
            <i class="fas fa-phone fa-1x"></i>
            <a href="tel:+917414027000 ">+91 7414027000 </a>
          </p>

          <p className="mobile">
            <i class="fas fa-phone fa-1x"></i>
            <a href="tel:+918094818740 ">+91 8094818740 </a>
          </p>

          <p className="mobile">
            <i class="fas fa-phone fa-1x"></i>
            <a href="te:+1(501)386-0787">+1 (501)386-0787</a>
          </p>
        </div>

        <p className="email-footer">
          <i class="fas fa-envelope"></i>{" "}
          <a href="mailto:connect@arcticdevs.com">connect@arcticdevs.com</a>
        </p>

        <div className="socials">
          <a href="https://www.facebook.com/arcticdevs/">
            <img
              className="footer-icons"
              src={`./social-media/fb.png`}
              alt=""
            />
          </a>
          {/* <a href=""> <img className='footer-icons' src={`./social-media/fiver.png`} alt="" /></a> */}
          <a href="https://www.instagram.com/arctic_devs/">
            {" "}
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/arctic-devs/">
            <img
              className="footer-icons"
              src={`./social-media/linkedin.png`}
              alt=""
            />
          </a>
          {/* <a href=""><img className='footer-icons' src={`./social-media/upwork.png`} alt="" /></a> */}
        </div>
      </div>
      <div className="footer-msg">
        <form onSubmit={sendMail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="user_email"
            placeholder="Enter your email ID"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            id=""
            cols="30"
            rows="5"
            name="message"
            placeholder="Message"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>

    <div className="copyright">
      <i class="far fa-copyright me-2 pt-1"></i> {date} - Arctic Devs
    </div>
  </>
);
}

export default Contact
