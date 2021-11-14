import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";



const PreviousBtn = (props) => {
  console.log(props);
  const {onClick } = props;
  return (
    <div className='testimonial-arrow-left' onClick={onClick}>
          {/* <img src={`./ellipse.png`} className='ellipse-left' alt="" /> */}
          <img src={`./arrow-left.png`} className='arrow-left' alt="" />
    </div>
  );
};
const NextBtn = (props) => {
  const {onClick } = props;
  return (
    <div className='testimonial-arrow-right' onClick={onClick}>
      {/* <img src={`./ellipse.png`} className='ellipse-right' alt="" /> */}
      <img src={`./arrow-right.png`} className='arrow-right' alt="" />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div id = 'testimonials'>
        <h1>TESTIMONIALS</h1>
      <div className="testimonial"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"> 
        <Slider  prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div className='card-test'>
    <img src={`./qoute-up.png`} className='quote-up' alt="" />
      <p>
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
      </p>
      <p>
        <span>PAULA WILSON</span> ,
        Media Analyst
      </p>
      <img src={`./quote-down.png`} className='quote-down' alt="" />
    </div>
  );
};

export default Testimonial;
