import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";

const CardImage = ({ images, details }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      // Simulate image loading (this would be your actual image fetching logic)
      const imagePromises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
        });
      });

      await Promise.all(imagePromises);
      setLoading(false);
    };

    loadImages();
  }, [images]);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {loading ? (
        // DaisyUI Skeleton loader
        <div className="grid grid-cols-1 gap-4">
          <div className=" w-full h-full skeleton animate-pulse bg-card"></div>
        </div>
      ) : (
        <div className="slider-container">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <div className="relative h-full ">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={img}
                    alt={details}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default CardImage;
