import React from 'react'
import './TechStack.css'

const TechStack = () => {
   return (
      <div id='tech-stack' className='container'>
         <h1>Our Tech Stack</h1>
         <img className='img-fluid full-stack-img' src={`./stack/stack.png`} alt="" />
     
         <img className='stack-one-smalles-img' src={`./stack/stack-small.png`} alt="" />
         {/* <img className='stack-two-smalles-img' src={ `./stack/stack-two-smallest -img.png`} alt="" />  */}
      </div>
   )
}

export default TechStack
