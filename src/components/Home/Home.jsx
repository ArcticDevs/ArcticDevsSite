import './Home.css'

import Navbar from '../Navbar/Navbar'
import React from 'react'
import Wave from '../Wave/Wave'

const Home = () => {
    return (<>
        <div id='home'  >
            {/* {<img src={`./aurora.png`} style={{ zIndex: '-1', position: 'absolute', width: '100%', height: '100%' }} alt="" />} */}
            <video autoPlay muted loop  style={{ opacity: "1", zIndex: '-1', position: 'absolute'}}  >
                <source src={`./video-aroras.mp4`} />
            </video>
            <Navbar />
            
            <div className='d-flex justify-content-center flex-column'>
                <div className='home-title'>
                    <h1>The One Stop For All Websites and Applications</h1>
                </div>
                <div className='home-description'>
                    <p>    Looking for a Website or Application that has the capability to boost your business? Well,
                        lucky for you! You have come to the right place!</p>

                </div>

            </div>
            <div style={{ zIndex: '2' }} className='nextSectionArrow'>
                <a href="#services">
                    {/* <img src={`./vector.png`} className='img-fluid' style={{ position: 'absolute', left: '50%', transform: 'translateX(-50px)', top: '80%', zIndex: '2' }} alt="" />
                    <img src={`./vector.png`} className='img-fluid' style={{ position: 'absolute', left: '50%', top: '76%', transform: 'translateX(-50px)' }} alt="" /> */}
                    <img src={`./Arrow_down.svg`} className='img-fluid' alt="" />                
                </a>

            </div>

            {/* <img src={`./curve (6).png`} className='img-curve' alt="" /> */}
            <Wave />
        </div>
    </>)
}

export default Home