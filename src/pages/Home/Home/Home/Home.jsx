import React from "react";
import ChefCard from "../ChefCard/ChefCard";
import RecipeTypes from "../RecipeTypes/RecipeTypes";
import ClientTestimonial from "../ClientTestimonial/ClientTestimonial";

const Home = () => {
  return (
    <div>
      <ChefCard />
      <RecipeTypes />
      <ClientTestimonial />
    </div>
  );
};

export default Home;
