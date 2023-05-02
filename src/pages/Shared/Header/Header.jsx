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
        <div className="text-white flex flex-col items-center justify-center text-center pt-64">
          <h2
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="text-5xl font-bold mb-10"
          >
            Recipes from Italy | {""}
            <span className="text-lime-500 text-5xl font-bold mb-10">
              All Authentic Italian Recipes
            </span>
          </h2>
          <p className="text-lg">
            Recipes from Italy, here you can find all the authentic Italian
            recipes, from traditional, <br /> to modern, to basic. Made, tried
            and tasted in our home in Milan!
          </p>
          <button
            data-aos="fade-up"
            data-aos-duration="700"
            className="py-4 px-5 bg-lime-500 hover:bg-lime-600 transition-all duration-200 ease-in-out rounded-lg text-lg font-bold mt-10"
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
