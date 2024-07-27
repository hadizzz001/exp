"use client" 
 


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
 
const BannerCarousel = ({data}) => {




 


 

  return (
    // <></>
<section className="about-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="about-one__highlighted-text text-center mb-[-30px] text-sm md:text-base"> 
              {data.length > 0 ? (
                data[0].fields.title // Access the first item's title
              ) : (
                <div className='home___error-container'>
                  <h2 className='text-black text-xl font-bold'>...</h2>
                </div>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
