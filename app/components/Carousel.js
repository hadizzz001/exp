"use client" 
  
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade'; // Import the fade effect CSS
import { Carousel } from 'react-bootstrap';




const BannerCarousel = ({data}) => {

 


 

  return ( 
    <>
 <div className="container mt-4">
      {data && data.length > 0 ? (
        <Carousel fade controls={false}>
          {data.map((item, index) => {
            const imageObjects = item?.fields?.image || [];

            return imageObjects.map((imageObj, imgIndex) => {
              const imageUrl = imageObj?.fields?.file?.url;

              return (
                imageUrl && (
                  <Carousel.Item key={`${index}-${imgIndex}`}>
                    <img
                      className="d-block w-100"
                      src={imageUrl}
                      alt={`Slide ${index + 1}-${imgIndex + 1}`}
                      style={{ height: '500px', objectFit: 'cover' }} // Set the height of the carousel items
                    />
                  </Carousel.Item>
                )
              );
            });
          })}
        </Carousel>
      ) : (
        <div className="home___error-container">
          <h2 className="text-black text-xl font-bold">No data available</h2>
        </div>
      )}
    </div>
    <style
  dangerouslySetInnerHTML={{
    __html:
      "\n.carousel-fade .carousel-item {\n  transition: opacity 2s ease-in-out; /* Adjust the duration here */\n  opacity: 0.5; /* Darker appearance initially */\n}\n\n.carousel-fade .carousel-item-next,\n.carousel-fade .carousel-item-prev,\n.carousel-fade .carousel-item-active {\n  opacity: 1; /* Fully visible during active state */\n}\n\n.carousel-fade .carousel-item-next,\n.carousel-fade .carousel-item-prev {\n  opacity: 0; /* Fully transparent when transitioning in or out */\n}\n"
  }}
/>




</>
  );
};

export default BannerCarousel;
