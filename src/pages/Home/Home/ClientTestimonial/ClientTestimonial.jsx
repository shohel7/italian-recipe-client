import React, { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import testimonialBg from "../../../../assets/images/slider-3.jpg";

const ClientTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl md:text-4xl text-center font-semibold text-lime-500 mb-5">
        Our Best Chef
      </h2>
      <p className="text-slate-500 text-center md:px-60">
        Recipes from Italy is the place where you can learn how to cook a dish
        like a native Italian. Genuine, authentic recipes, they are a lifestyle,
        our way of life in Italy!
      </p>
      <div
        className="mt-8 w-full py-5 bg-center bg-cover bg-blend-overlay bg-black/60"
        style={{ backgroundImage: `url(${testimonialBg})` }}
      >
        <Swiper
          style={{
            "--swiper-pagination-color": "#84cc16",
            "--swiper-navigation-color": "#84cc16",
            "--swiper-navigation-size": "30px",
            "--swiper-pagination-bullet-inactive-color": "#FFFF",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div>
            {testimonials.map((testimonial) => (
              <SwiperSlide>
                <div className="flex flex-col gap-12 items-center py-10">
                  <FaQuoteRight className="text-7xl text-white bg-lime-300 rounded-full py-5 h-24 w-24" />
                  <p className="text-slate-300 md:font-semibold text-xl md:text-2xl px-16 md:px-40 text-center">
                    {testimonial.quote}
                  </p>
                  <h2 className="text-lime-500 text-3xl md:font-bold">
                    {testimonial.name}
                  </h2>
                  <img
                    className="rounded-full h-24 w-24"
                    src={testimonial.imgUrl}
                    alt="client-image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientTestimonial;
