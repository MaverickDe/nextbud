import React from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";

function Fade({children}) {
  const settings = {
  
    fade: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
      waitForAnimate: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 7000,
    };
    

 
  return (
    <div className="slider-container h-full  ">
      <Slider {...settings}>
        {/* <div>
          <img src={baseUrl + "/abstract01.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/abstract02.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/abstract03.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/abstract04.jpg"} />
        </div> */}
              
              {children}
      </Slider>
    </div>
  );
}

export default Fade;
