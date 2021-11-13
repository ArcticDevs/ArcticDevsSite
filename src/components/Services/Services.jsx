import React from 'react'
import './Services.css'

const Services = () => {
    return (<>
            
            <section id = 'services' className='container-sm'>
                <h1>Our Services</h1>
            <div className='d-flex justify-content-center'>
           <div className='top-box-service tops'>
                <i class="fas fa-laptop-code fa-2x"></i>
                <h3>  Software Development</h3>
                <p>Tell us the kind of software you would require! We can get it done as per your needs in the best way possible!</p>
            </div>
            </div>

            <div className='d-flex justify-content-around'>

              <div className='p-2 flex-fill'>

                  <div className='top-box-service'>
                    <i class="fas fa-desktop fa-2x"></i>
                    <h3>Full Stack Development</h3>
                    <p>We use stack to get attractive applications and Websites made right from scratch.</p>
                  </div>

                  <div className='top-box-service'>
                      <i class="fas fa-lightbulb  fa-2x"></i>
                      <h3>Multiple Revisions</h3>
                      <p>We make sure that your service has no loopholes, we try to make the perfect solution with multiple revisions</p>
                  </div>
            </div>

           <div className="p-2 flex-fill" >
              <img  src={`./toppng.png`} className='toppng' alt=""  />      
           </div>

            <div className="p-2 flex-fill">

              <div className='top-box-service'>
               <i class="fas fa-mobile-alt fa-2x"></i>
               <h3>Robust and Powerful Projects</h3>
               <p>Our projects are one of a kind! We make sure that our solutions have the power to boost your services like no one can.</p>
             </div>

             <div className='top-box-service'>
               <i class="fas fa-shopping-cart fa-2x"></i> 
                  <h3>E-Commerce Development</h3>
                 <p>Starting a new business and want to host it online in the most efficient way? We can provide that for you!</p>
             </div>

            </div>
            </div>

            <div className='d-flex justify-content-center'>
              <div className='top-box-service tops bottom'>
             <i class="fas fa-truck fa-2x"></i> 
             <h3>Fast Delivery</h3>
                <p>We will provide you with your desired outcome in the fastest date possible from your day of order placement.</p>
          </div>
            </div>



            </section>

            </>)}

          

export default Services





//  <div className='top-box-service'>
//               <i class="fas fa-laptop-code fa-2x"></i>
//                <h3>  Software Development</h3>
//                 <p>Tell us the kind of software you would require! We can get it done as per your needs in the best way possible!</p>
//             </div>
//                   <div className='mid-box'>
//         <i class="fas fa-desktop fa-2x"></i>
//         <h3>Full Stack Development</h3>
//         <p>We use stack to get attractive applications and Websites made right from scratch.</p>
//         </div>

//         <div className="mid-box" >
//           <i class="fas fa-lightbulb  fa-2x"></i>
//           <h3>Multiple Revisions</h3>
//           <p>We make sure that your service has no loopholes, we try to make the perfect solution with multiple revisions</p>
//           </div>
          
//         <div className="col-lg-4 col-md-4 col-sm-4" >
//         <img style={{width:'120px',height:'120px'}} src={`./toppng.png`} className='toppng' alt=""  />      
//         </div>

        
//           <div className='mid-box'>
//             <i class="fas fa-mobile-alt fa-2x"></i>
//             <h3>Robust and Powerful Projects</h3>
//             <p>Our projects are one of a kind! We make sure that our solutions have the power to boost your services like no one can.</p>
//           </div>

//           <div className='mid-box'>
//             <i class="fas fa-shopping-cart fa-2x"></i> 
//                <h3>E-Commerce Development</h3>
//               <p>Starting a new business and want to host it online in the most efficient way? We can provide that for you!</p>
//           </div>
//            <div className = 'bottom-box'>
//              <i class="fas fa-truck fa-2x"></i> 
//              <h3>Fast Delivery</h3>
//                 <p>We will provide you with your desired outcome in the fastest date possible from your day of order placement.</p>
//           </div>