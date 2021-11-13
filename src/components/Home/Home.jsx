import React from 'react'
import Navbar from '../Navbar/Navbar'

import './Home.css'
const Home = () => {
    return (<>
        <section id='home'  >
        <img src={`./aurora.png`} className='' style={{zIndex:'-1',position:'absolute',width:'100%',height:'100%'}} salt="" />
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
        <img src={`./vector.png`} className='img-fluid'  style={{position:'absolute',left:'50%',zIndex:'99',transform:'translateX(-50px)', top:'80%'}} alt="" />
        <img src={`./vector.png`} className='img-fluid'  style={{position:'absolute',left:'50%',top:'76%',transform:'translateX(-50px)',zIndex:'99'}} alt="" />
        <img src={`./curve.png`}  className='img-fluid' style={{position:'absolute',width:"100%",height:"50%",zIndex:'-1',bottom:'-10px',minWidth:'700px',left:'-15%'}} alt="" />
        </section>
   </> )
}

export default Home





