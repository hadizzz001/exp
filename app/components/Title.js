"use client"



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const BannerCarousel = ({ data }) => {









  return (
    <section className="about-one mb-10">
      <p className="about-one__highlighted-text text-center mb-[-30px] text-sm md:text-base p-0" style={{whiteSpace: 'pre-wrap', fontSize:'30px', fontWeight:'bolder'}}>
        {data[0].fields.title}
      </p>
    </section>

  );
};

export default BannerCarousel;
