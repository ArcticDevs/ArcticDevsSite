import React,{useState} from 'react'
import './Navbar.css'


const Navbar = () => {

    const [spread, setspread] = useState(false)
  

    const togglenav =()=>{
                setspread(!spread)     
    }


    return (<>
            <nav id='navbar'>
                <img src={`./logo.png`} className='logo' alt="" />
                <div className='nav-list p-0'>
                    <ul className ={spread ? 'show' : null}>
                        <li><a onClick={togglenav} href='#services' >Our services</a></li>
                         <li><a onClick={togglenav} href='#tech-stack' >Tech Stack</a></li>
                        <li><a onClick={togglenav} href='#projects' >Portfolio</a></li>
                        <li><a onClick={togglenav} href='#testimonials' >Testimonials</a></li>
                        <li><a onClick={togglenav} href='#footer' >Contact Us</a></li>
                    </ul>
                   {spread ? <i id ='nav-icon'  class="fas fa-times fa-2x" onClick={togglenav} ></i> : <i id ='nav-icon' className="fas fa-bars fa-2x" onClick={togglenav}></i>} 
                </div>
            </nav>
            {/* <video src={`./video.mp4`} loop auhrefPlay muted preload></video> */}
    </>)
}

export default Navbar
