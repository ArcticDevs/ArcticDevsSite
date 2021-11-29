import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import Slider from "react-slick";
import testimonials from './TestimonialsContent.js'


const PreviousBtn = (props) => {
  // console.log(props);
  const { onClick } = props;
  return (
    <div className='testimonial-arrow-left' onClick={onClick}>
      {/* <img src={`./ellipse.png`} className='ellipse-left' alt="" /> */}
      <img src={`./arrow-left.png`} className='arrow-left' alt="" />
    </div>
  );
};
const NextBtn = (props) => {
  const { onClick } = props;
  return (
    <div className='testimonial-arrow-right' onClick={onClick}>
      {/* <img src={`./ellipse.png`} className='ellipse-right' alt="" /> */}
      <img src={`./arrow-right.png`} className='arrow-right' alt="" />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div className='testimonial-bg'>
    <div id='testimonials'>
      
      <h1>TESTIMONIALS</h1>
      <div className="testimonial" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" >
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card id={1} />
          <Card id={2} />
          <Card id={3} />
          <Card id={4} />
        </Slider>
      </div>
    </div>
    </div>
  );
};


const Card = ({ id }) => {
  return (
    testimonials.map((item) => {
      if (item.id === id) {
        return <div className='card-test' key={item.id}>
          <img src={`./qoute-up.png`} className='quote-up' alt="" />
          <div className="content">
          <p>
            {item.content}
          </p>
          
          <img src={`./quote-down.png`} className='quote-down' alt="" />
          </div>
         
            <p className='m-0'>{item.name},</p>
            <p>{item.place}</p>
          
        </div>
      }
      return null;
    })
  );
};

export default Testimonial;
