"use client" 
 


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
 
const BannerCarousel = ({data}) => {




 


 

  return (
    // <></>
<section className="about-one">
  <div className="container">
    <p className="about-one__highlighted-text text-center mb-[-30px] text-sm md:text-base">
      {data.length > 0 ? data[0].fields.title.toLowerCase() : '...'}
    </p>
  </div>
  <style
  dangerouslySetInnerHTML={{
    __html:
      "\n  .about-one .about-one__highlighted-text { \n    font-size: 50px !important; \n    text-transform: lowercase;\n    line-height: 55px;\n}\n"
  }}
/>



</section>

  );
};

export default BannerCarousel;
