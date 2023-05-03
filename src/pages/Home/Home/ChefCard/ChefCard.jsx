import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const ChefCard = () => {
  const allChefs = useLoaderData();
  console.log(allChefs);
  return (
    <div className="px-5 md:px-28 mx-0 py-20">
      <h2 className="text-3xl md:text-4xl text-center font-semibold text-lime-500 mb-5">
        Our Best Chef
      </h2>
      <p className="text-slate-500 text-center md:px-60">
        Recipes from Italy is the place where you can learn how to cook a dish
        like a native Italian. Genuine, authentic recipes, they are a lifestyle,
        our way of life in Italy!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-7 mt-12">
        {allChefs.map((chef) => (
          <div
            className="card md:w-[345px] bg-base-100 shadow-xl"
            key={chef.id}
          >
            <figure>
              <img src={chef.imgUrl} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Chef Name: {chef.name}</h2>
              <div className="flex justify-between items-center">
                <span>
                  <p>Year of Experience: {chef.experienceYear}</p>
                  <p>Number of Recipe: {chef.numberOfRecipes}</p>
                </span>
                <span>
                  <FaThumbsUp className="text-lime-500 text-2xl" />
                </span>
              </div>
              <div className="card-actions justify-center">
                <Link to={`/chefRecipes/${chef.id}`}>
                  <button className=" text-white py-2 md:py-3 px-3 md:px-5 w-full bg-lime-500 hover:bg-lime-600 transition-all duration-200 ease-in-out rounded-lg text-lg md:font-bold mt-10">
                    View Recipe
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefCard;
