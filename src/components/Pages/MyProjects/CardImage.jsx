import Slider from "react-slick";
import "./slide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardImage = ({ images }) => {
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
          dots: true,
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
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <div className=" relative h-full">
                <img
                  className=" w-full h-full object-cover object-center"
                  src={img}
                  alt="Slider Banner"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CardImage;
