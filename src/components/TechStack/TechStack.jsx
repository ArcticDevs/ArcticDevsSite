import './TechStack.css'

import React from 'react'
import Meteor from '../Meteor/Meteor'

const TechStack = () => {
   return (<>
      <div className='tech-stack-bg'>
      <section id='tech-stack' className='container'>
         <h1>Our Tech Stack</h1>
         <img className='img-fluid full-stack-img' src={`./stack/stack.png`} alt="" data-aos="fade-up" />
     
         <img className='stack-one-smalles-img' src={`./stack/stack-small.png`} alt="" data-aos="fade-up" />
         {/* <img className='stack-two-smalles-img' src={ `./stack/stack-two-smallest -img.png`} alt="" />  */}
      </section>

      </div>
  </> )
}

export default TechStack
