import React,{useState,useEffect} from 'react'
import './Contact.css'


const Contact = () => {
    const [date, setdate] = useState()


    useEffect(() => {
         let date = new Date().getFullYear()
        setdate(date)
    }, [])

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleValidation = (e) => {
      if (!name || !email || !message) {
        alert("Please fill up all the columns before submitting.");
        return false;
      } else {
        alert("Form Submitted");
        return true;
      }
    };

    const sendMail = (e) => {
      e.preventDefault();

      if (handleValidation()) {
        emailjs
          .sendForm(
            "service_itwzkjm",
            "template_7mgo3hj",
            e.target,
            "user_KoXVkTMGlIdTdQgNSOyw6"
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));

        e.target.reset();
      }
    };

    return (
      <>
        <h1 className="footer-head">Contact Us</h1>
        <section id="footer" className="container">
          <div className="footer-contact">
            <p>
              <i class="fas fa-phone fa-1x"></i>
              <br />
              <br />
              <a href="tel:+917414027000 ">+91 7414027000 </a>
              <br />
              <br />
              <a href="tel:+918094818740 ">+91 8094818740 </a>
              <br />
              <br />
              <a href="te:+1(501)386-0787">+1 (501)386-0787</a> <br />
              <br />
            </p>

            <p className="email-footer">
              <i class="fas fa-envelope"></i>{" "}
              <a href="mailto:connect@arcticdevs.com">connect@arcticdevs.com</a>
            </p>

            <div className="socials d-flex justify-content-between">
              <a href="">
                <img
                  className="footer-icons"
                  src={`./social-media/fb.png`}
                  alt=""
                />
              </a>
              {/* <a href=""> <img className='footer-icons' src={`./social-media/fiver.png`} alt="" /></a> */}
              <a href="https://www.instagram.com/arctic_devs/">
                {" "}
                <img
                  className="footer-icons"
                  src={`./social-media/insta.png`}
                  alt=""
                />
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
            <form>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="user_email"
                placeholder="Enter your email ID"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                id=""
                cols="30"
                rows="5"
                name="message"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        </section>

        <div className="copyright">
          <i class="far fa-copyright"></i> {date} - Arctic devs
        </div>
      </>
    );
}

export default Contact
