import React from "react";
import notFound from "../../../assets/images/not-found.webp";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <span className="flex items-center justify-center">
        <img src={notFound} alt="not found-image" />
      </span>
      <Link to="/" className="flex justify-center">
        <span className="py-2 px-5 rounded-md bg-lime-500 text-white hover:bg-lime-600 transition-all duration-200 ease-in-out">
          Go back
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
