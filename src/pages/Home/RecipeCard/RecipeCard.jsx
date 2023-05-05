import React, { useState } from "react";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const RecipeCard = () => {
  const { recipes } = useLoaderData();
  const [favorite, setFavorite] = useState(false);
  console.log(favorite);

  return (
    <div className="px-5 md:px-28 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-7 mt-12">
        {recipes.map((recipe) => (
          <div
            className="card md:w-[345px] bg-base-100 shadow-xl"
            key={recipe.id}
          >
            <figure>
              <LazyLoadImage
                effect="blur"
                key={recipe.id}
                alt={recipe.alt}
                src={recipe.img_url}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Recipe: {recipe.name}</h2>
              <div>
                <p>
                  <span className="font-bold text-gray-600">
                    Recipe Method:{" "}
                  </span>
                  {recipe.cooking_method}
                </p>
                <span>
                  <p className="font-bold text-gray-600">Ingredients:</p>
                  {recipe.ingredients?.map((ingredient, index) => (
                    <p key={index}>
                      {index + 1}. {ingredient.name}
                    </p>
                  ))}
                </span>
                <div className="flex justify-between items-center mt-3">
                  <button
                    onClick={(e) => setFavorite(!favorite)}
                    className={`flex gap-2 items-center bg-lime-500 py-1 px-2 rounded-md ${
                      favorite ? "opacity-25" : "opacity-100"
                    }`}
                  >
                    <p>Add to Favorite</p>
                    <FaHeart className="text-white text-xl" />
                  </button>
                  <span className="">
                    <Rating
                      placeholderRating={recipe?.rating}
                      readonly
                      emptySymbol={<FaRegStar className="text-lg" />}
                      placeholderSymbol={
                        <FaStar className="text-warning text-lg" />
                      }
                      fullSymbol={<FaStar className="text-lg" />}
                    />
                    <span> {recipe?.rating}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
