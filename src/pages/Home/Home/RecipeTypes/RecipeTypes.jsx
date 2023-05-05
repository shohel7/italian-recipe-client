import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const RecipeTypes = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="px-5 md:px-28 mx-0 pb-20">
      <h2 className="text-3xl md:text-4xl text-center font-semibold text-lime-500 mb-5">
        Recipe Categories
      </h2>
      <p className="text-slate-500 text-center md:px-60">
        Recipes from Italy is the place where you can learn how to cook a dish
        like a native Italian. Genuine, authentic recipes, they are a lifestyle,
        our way of life in Italy!
      </p>
      <div className="grid md:grid-cols-4 gap-4 mt-8">
        {categories.map((category) => (
          <div className="p-5 bg-lime-50 rounded-lg" key={category.id}>
            <div className="w-full bg-cover overflow-hidden rounded-lg cursor-pointer">
              <LazyLoadImage
                key={category.id}
                effect="blur"
                alt={category.alt}
                src={category.imgUrl}
                className="w-full h-56 transform 
                                        transition duration-1000 hover:scale-125"
              />
            </div>

            <div className="text-lime-500 mt-5">
              <h2 className="font-bold text-xl">{category.category}</h2>
              <p>{category.numberOfRecipes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeTypes;
