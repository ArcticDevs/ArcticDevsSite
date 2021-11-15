import './Portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react'

const Portfolio = () => {

    const [contentMore, setcontentMore] = useState(false)

    const showMore = () => {
        setcontentMore(!contentMore)
    }

    return (<>
        <section id='projects' className='container-fluid'>
            <h1>Portfolio</h1>
            <div className="container">
                <div className='row' data-aos="fade-up">
                    <div className='col-md-6 col-12 d-flex align-items-center'>
                        <img src={`./screenshots/itc.jpeg`} alt="" className='project-img' />
                    </div>
                    <div className='project-body col-md-6 col-12' >
                        <h1 className='project-title text-center'>ITC Supreme</h1>
                        <p className="text-center">A Fullstack newLetter website with subscription system, admin and staff panels and with push notifications enabled. Its also a PWA.</p>
                        <div className="viewProject">
                            <a href="https://itcsupreme.com/" target="_blank" rel="noreferrer"><button>View Project<i class="fas fa-arrow-right"></i></button></a>
                        </div>
                    </div>
                </div>
                <div className='row' data-aos="fade-up">
                    <div className='project-body col-md-6 col-12 order-2 order-md-1' >
                        <h1 className='project-title text-center'>Vax Trax Global</h1>
                        <p className="text-center">An American startup to track the vaccine statuses for travelling passengers and for authorities that require vaccine certification.</p>
                        <div className="viewProject">
                            <a href="https://vaxtraxglobal-front.web.app/" target="_blank" rel="noreferrer"><button>View Project<i class="fas fa-arrow-right"></i></button></a>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 d-flex align-items-center order-1 order-md-2'>
                        <img src={`./screenshots/vtg.jpeg`} alt="" className='project-img' />
                    </div>
                </div>
                <div className='row' data-aos="fade-up">
                    <div className='col-md-6 col-12 d-flex align-items-center'>
                        <img src={`./screenshots/discordhome.jpeg`} alt="" className='project-img' />
                    </div>
                    <div className='project-body col-md-6 col-12' >
                        <h1 className='project-title text-center'>Discord Home </h1>
                        <p className="text-center">A norway based startup aimed to promote discord channels within each category.</p>
                        <div className="viewProject">
                            <a href="https://discordhome.com/" target="_blank" rel="noreferrer"><button>View Project<i class="fas fa-arrow-right"></i></button></a>
                        </div>
                    </div>
                </div>


                <div className={contentMore ? 'extra-projects' : 'none'}>
                    <div className='row' data-aos="fade-up">
                        <div className='project-body col-md-6 col-12 order-2 order-md-1' >
                            <h1 className='project-title text-center'>Sports-Dex</h1>
                            <p className="text-center">A USA based startup which provides till date updated records of basketball players.</p>
                            <div className="viewProject">
                                <a href="https://sports-dex-53255.web.app/" target="_blank" rel="noreferrer"><button>View Project<i class="fas fa-arrow-right"></i></button></a>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 d-flex align-items-center order-1 order-md-2'>
                            <img src={`./screenshots/sportsdex.jpeg`} alt="" className='project-img' />
                        </div>
                    </div>
                    <div className='row' data-aos="fade-up">
                        <div className='col-md-6 col-12 d-flex align-items-center'>
                            <img src={`./screenshots/printribe.jpeg`} alt="" className='project-img' />
                        </div>
                        <div className='project-body col-md-6 col-12' >
                            <h1 className='project-title text-center'>Printribe</h1>
                            <p className="text-center">An Indian startup to provide merchandise customization and an e-commerce store.</p>
                            <div className="viewProject">
                                <a href="https://printribe-frontend.web.app/" target="_blank" rel="noreferrer"><button>View Project<i class="fas fa-arrow-right"></i></button></a>
                            </div>
                        </div>
                    </div>
                    <div className='row' data-aos="fade-up">
                        <div className='project-body col-md-6 col-12 order-2 order-md-1' >
                            <h1 className='project-title text-center'>Braj Interiors</h1>
                            <p className="text-center">A portfolio design for a professional Indian heritage interior designer.</p>
                            <div className="viewProject">
                                <a href="https://braj-b633f.web.app/" target="_blank" rel="noreferrer"><button>View Project<i class="fas fa-arrow-right"></i></button></a>
                            </div>
                        </div>
                        <div className='col-md-6 col-12 d-flex align-items-center order-1 order-md-2'>
                            <img src={`./screenshots/braj.jpeg`} alt="" className='project-img' />
                        </div>
                    </div>

                    <div className="text-center">
                        <button className='show-less' onClick={showMore}>Show less</button>
                    </div>
                </div>
                <div className="text-center">
                    <button style={contentMore ? { display: 'none' } : null} className='show-more' onClick={showMore}>Show More</button>
                </div>
            </div>

        </section>
    </>
    )
}

export default Portfolio
