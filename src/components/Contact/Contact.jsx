import React,{useState,useEffect} from 'react'
import './Contact.css'


const Contact = () => {
    const [date, setdate] = useState()


    useEffect(() => {
         let date = new Date().getFullYear()
        setdate(date)
    }, [])

    return (<>
     <h1 className='footer-head'>Contact Us</h1>
    <section id = 'footer' className='container'>
   
    <div className='footer-contact d-flex justify-content-center'>
        <p>
        <i class="fas fa-phone fa-1x"></i><br /><br />
            <a href="tel:+917414027000 ">+91 7414027000 </a><br /><br />
            <a href="tel:+918094818740 ">+91 8094818740 </a><br /><br />
            <a href="te:+1(501)386-0787">+1 (501)386-0787</a> <br /><br />
        </p>

        <p className='email-footer'><i class="fas fa-envelope"></i>    <a href="mailto:connect@arcticdevs.com">connect@arcticdevs.com</a></p>

        <div className='socials'>
        <a href=""><img className='footer-icons' src={`./social-media/fb.png`} alt="" /></a>
        {/* <a href=""> <img className='footer-icons' src={`./social-media/fiver.png`} alt="" /></a> */}
       <a href="https://www.instagram.com/arctic_devs/"> <img className='footer-icons' src={`./social-media/insta.png`} alt="" /></a>
       <a href="https://www.linkedin.com/in/arctic-devs/"><img className='footer-icons' src={`./social-media/linkedin.png`} alt="" /></a>
        {/* <a href=""><img className='footer-icons' src={`./social-media/upwork.png`} alt="" /></a> */}
        
        </div>
    </div>
    <div className='footer-msg'>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='email' />
        <textarea name="" id="" cols="30" rows="5" placeholder='Message'></textarea>
        <button>Submit</button>
    </div>

    </section>

    <div className='copyright'>
         <p> <i class="far fa-copyright"></i> {date} - Arctic devs</p>
    </div>
</>)
}

export default Contact
