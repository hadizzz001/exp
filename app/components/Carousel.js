"use client" 
 


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
 
const BannerCarousel = ({data}) => {

 


 

  return ( 
    <div className="container"> {/* Set container height */}
    {data && data.length > 0 ? (
                        <Swiper spaceBetween={50} loop modules={[Autoplay]} autoplay={{
                          delay: 4000,
                          stopOnLastSlide: false,
                          reverseDirection: true
                        }}  >
        {data.map((item, index) => {
          const imageObjects = item?.fields?.images || [];

          return imageObjects.map((imageObj, imgIndex) => {
            const imageUrl = imageObj?.fields?.file?.url;

            return (
              imageUrl && (
                <SwiperSlide key={`${index}-${imgIndex}`} className="flex justify-center items-center">
                  <img
                    className="w-full h-full object-cover" // Ensure the image covers the slide area
                    src={imageUrl}
                    alt={`Slide ${index + 1}-${imgIndex + 1}`}
                    style={{ width: '1200px', height: '500px' }}
                  />
                </SwiperSlide>
              )
            );
          });
        })}
      </Swiper>
    ) : (
      <div className="home___error-container">
        <h2 className="text-black text-xl font-bold">No data available</h2>
      </div>
    )}
  </div>
  );
};

export default BannerCarousel;
