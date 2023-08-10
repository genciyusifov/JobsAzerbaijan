import React from 'react';
import { Carousel } from 'antd';

const imageStyle = {
  width : "100%" ,
  height: '600px', 
  objectFit: 'cover',
};

const Slider = () => (
  <Carousel autoplay>
    <div>
      <img
        src="https://dailypost.ng/wp-content/uploads/2022/05/Top-Recruitment-Sites-in-Nigeria.png" // İlk resmin URL'si
        alt="Slide 1"
        style={imageStyle}
      />
    </div>
    <div>
      <img
        src="https://dailypost.ng/wp-content/uploads/2022/05/Top-Recruitment-Sites-in-Nigeria.png" // İkinci resmin URL'si
        alt="Slide 2"
        style={imageStyle}
      />
    </div>
    <div>
      <img
        src="https://dailypost.ng/wp-content/uploads/2022/05/Top-Recruitment-Sites-in-Nigeria.png" // Üçüncü resmin URL'si
        alt="Slide 3"
        style={imageStyle}
      />
    </div>
    <div>
      <img
        src="https://dailypost.ng/wp-content/uploads/2022/05/Top-Recruitment-Sites-in-Nigeria.png" // Dördüncü resmin URL'si
        alt="Slide 4"
        style={imageStyle}
      />
    </div>
  </Carousel>
);

export default Slider;
