import React,{useState} from 'react'
import './Portfolio.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';

 AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-quad",
      delay: 100,
    });








const Portfolio = () => {

    const [contentMore, setcontentMore] = useState(false)

    const showMore = () =>{
       setcontentMore(!contentMore)
    }
  
    return (<>
        <section id='projects'  className='container-fluid'>
            <h1>Portfolio</h1>
           <div className='row'  data-aos="fade-up"
     data-aos-duration="3000" >
            <img src={`./screenshots/one.png`}   className='col-md-12 col-lg-6 col-sm-12'  alt="" />
            <div className='project-body col-md-12 col-sm-12 col-lg-6' >
                <h1>Project 1</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <button>View Project<i class="fas fa-arrow-right"></i></button>
            </div>
           </div> 
           <div className='project-two row' data-aos="fade-up"
     data-aos-duration="3000"  >
            <img src={`./screenshots/two.png`} className='col-md-12 col-lg-6 col-sm-12' alt="" />
            <div className='project-body col-md-12 col-sm-12 col-lg-6' >
                <h1>Project 2</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <button>View Project<i class="fas fa-arrow-right"></i></button>
            </div>
             
           </div>
           <div className='row' data-aos="fade-up"
     data-aos-duration="3000" >
            <img src={`./screenshots/three.png`}  className='col-md-12 col-lg-6 col-sm-12' alt="" />
            <div className='project-body col-md-12 col-sm-12 col-lg-6'  >
                <h1>Project 3</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <button>View Project<i class="fas fa-arrow-right fa-lg"></i></button>
            </div>
           </div>
            <div  className={contentMore ?  'extra-projects': 'none' }>

            <div className='project-two row' data-aos="fade-up"
     data-aos-duration="3000"  >
            <img src={`./screenshots/two.png`} className='col-md-12 col-lg-6 col-sm-12' alt="" />
            <div className='project-body col-md-12 col-sm-12 col-lg-6' >
                <h1>Project 2</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <button>View Project<i class="fas fa-arrow-right"></i></button>
            </div>
           </div>

            <div className='row'>
            <img src={`./screenshots/three.png`} data-aos="fade-up"  data-aos-duration="3000" className='col-md-12 col-lg-6 col-sm-12' alt="" />
            <div className='project-body col-md-12 col-sm-12 col-lg-6'  >
                <h1>Project 3</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <button>View Project<i class="fas fa-arrow-right fa-lg"></i></button>
            </div>
           </div>
           
            <div className='project-two row' data-aos="fade-up"
     data-aos-duration="3000"  >
            <img src={`./screenshots/two.png`} className='col-md-12 col-lg-6 col-sm-12' alt="" />
            <div className='project-body col-md-12 col-sm-12 col-lg-6' >
                <h1>Project 2</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <button>View Project<i class="fas fa-arrow-right"></i></button>
            </div>
           </div>
            
            <button className='show-less' onClick={showMore}>Show less</button>
            </div>
            <button  style ={contentMore ? {display:'none'} : null} className='show-more' onClick={showMore}>Show More</button>
        </section>
        </>
    )
}

export default Portfolio
