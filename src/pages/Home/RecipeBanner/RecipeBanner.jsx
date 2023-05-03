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
      <div className="px-5 md:px-28 flex flex-col items-center absolute top-16">
        <span>
          <img
            className="bg-lime-500 h-28 w-28 rounded-full opacity-30"
            src={imgUrl}
            alt="chef-image"
          />
        </span>
        <h2 className="text-5xl text-white font-bold mt-10 mb-7">{name}</h2>
        <div className="flex gap-10 text-white">
          <span className="flex items-center gap-3">
            <span className="text-lg font-bold text-lime-500">Likes</span>{" "}
            <FaHeart className="text-xl" />
          </span>
          <p className="text-lg font-bold">
            <span className="text-lime-500">Number of Recipe:</span>{" "}
            {experienceYear}
          </p>
          <p className="text-lg font-bold">
            <span className="text-lime-500">Year of Experience:</span>{" "}
            {numberOfRecipes}
          </p>
        </div>
        <p className="text-white text-lg mt-8 text-center px-40">
          <span className="text-lime-500 font-bold">Short Bio:</span> {shortBio}
        </p>
      </div>
    </div>
  );
};

export default RecipeBanner;
