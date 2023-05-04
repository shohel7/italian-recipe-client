import React from "react";
import bannerImg from "../../../assets/images/category-4.jpg";
import { useLoaderData } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const RecipeBanner = () => {
  const { id, imgUrl, name, experienceYear, numberOfRecipes, shortBio } =
    useLoaderData();

  return (
    <div
      className="w-full h-[450px] bg-center bg-cover bg-blend-overlay bg-black/80 relative"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="px-5 md:px-28 flex flex-col items-center absolute top-8 md:top-16">
        <span>
          <img
            className="bg-lime-500 h-24 w-24 md:h-28 md:w-28 rounded-full"
            src={imgUrl}
            alt="chef-image"
          />
        </span>
        <h2 className="text-3xl md:text-5xl text-white font-bold mt-6 md:mt-10 mb-7">
          {name}
        </h2>
        <div className="flex flex-col md:flex-row md:gap-10 text-white">
          <span className="flex items-center gap-3">
            <span className="md:text-lg font-bold text-lime-500">Likes</span>{" "}
            <FaHeart className="md:text-xl" />
          </span>
          <p className="md:text-lg font-bold">
            <span className="text-lime-500">Number of Recipe:</span>{" "}
            {experienceYear}
          </p>
          <p className="md:text-lg font-bold">
            <span className="text-lime-500">Year of Experience:</span>{" "}
            {numberOfRecipes}
          </p>
        </div>
        <p className="text-white md:text-lg mt-8 text-center md:px-40">
          <span className="text-lime-500 font-bold">Short Bio:</span> {shortBio}
        </p>
      </div>
    </div>
  );
};

export default RecipeBanner;
