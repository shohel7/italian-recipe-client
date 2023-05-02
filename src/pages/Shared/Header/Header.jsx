import React from "react";
import bannerImg from "../../../assets/images/slider-1.jpg";
import NavigationBar from "../NavigationBar/NavigationBar";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <NavigationBar />
      <div
        className="w-full h-screen bg-center bg-cover bg-blend-overlay bg-black/60"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="text-white flex flex-col items-center justify-center text-center pt-40 md:pt-60">
          <div className="md:flex gap-x-3">
            <h2
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="700"
              className="text-4xl md:text-5xl md:font-bold mb-10"
            >
              Recipes from Italy
            </h2>
            <h2
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="700"
              className="text-lime-500 text-4xl md:text-5xl md:font-bold mb-10"
            >
              All Authentic Italian Recipes
            </h2>
          </div>
          <p className="md:text-lg px-8 md:px-64">
            Recipes from Italy, here you can find all the authentic Italian
            recipes, from traditional, to modern, to basic. Made, tried and
            tasted in our home in Milan!
          </p>
          <button
            data-aos="fade-up"
            data-aos-duration="700"
            className="py-3 md:py-4 px-3 md:px-5 bg-lime-500 hover:bg-lime-600 transition-all duration-200 ease-in-out rounded-lg text-lg md:font-bold mt-10"
          >
            <span className="flex items-center gap-3">
              <span> More Recipe</span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
