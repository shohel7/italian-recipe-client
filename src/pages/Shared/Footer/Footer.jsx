import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaUtensils,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-lime-100 mt-20 py-10 md:py-16">
      <div className="footer pt-10 px-5 md:px-28 mx-0 pb-20 items-center">
        <div>
          <Link to="/">
            <span className="flex justify-center">
              <FaUtensils className="text-5xl text-lime-500" />
            </span>
            <p className="text-xl font-semibold cursor-pointer">
              ITALIANO <span className="text-lime-500">RECIPE</span>
            </p>
          </Link>
          <p className="text-gray-600 md:text-base">
            Recipes from Italy is the place where you can learn <br /> how to
            cook a dish like a native Italian. Genuine, <br /> authentic
            recipes, they are a lifestyle, our way <br /> of life in Italy!
          </p>
          <span className="flex gap-5 mt-5">
            <Link target="_black" to="https://facebook.com/">
              <FaFacebookF className="text-3xl border border-lime-500 hover:text-white hover:bg-lime-500 transition duration-200 ease-in-out rounded-full py-2 h-10 w-10" />
            </Link>
            <Link target="_black" to="https://twitter.com/">
              <FaTwitter className="text-3xl border border-lime-500 hover:text-white hover:bg-lime-500 transition duration-200 ease-in-out rounded-full py-2 h-10 w-10" />
            </Link>
            <Link target="_black" to="https://instagram.com/">
              <FaInstagram className="text-3xl border border-lime-500 hover:text-white hover:bg-lime-500 transition duration-200 ease-in-out rounded-full py-2 h-10 w-10" />
            </Link>
            <Link target="_black" to="https://youtube.com/">
              <FaYoutube className="text-3xl border border-lime-500 hover:text-white hover:bg-lime-500 transition duration-200 ease-in-out rounded-full py-2 h-10 w-10" />
            </Link>
          </span>
        </div>
        <div className="md:text-base text-gray-600 md:space-y-1">
          <span className="footer-title">To Category</span>
          <a className="link link-hover">Zuppe e salse</a>
          <a className="link link-hover">Common pizzas</a>
          <a className="link link-hover">Pasta varieties</a>
          <a className="link link-hover">Pesce (fish dishes)</a>
        </div>
        <div className="md:text-base text-gray-600 md:space-y-1">
          <span className="footer-title">Useful Links</span>
          <a className="link link-hover">All Chefs</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Login</a>
          <a className="link link-hover">About Us</a>
        </div>
        <div className="md:text-base text-gray-600 md:space-y-1">
          <span className="footer-title">Contact Us</span>
          <span className="flex gap-3 items-center">
            <FaMapMarkerAlt className="text-xl" />
            <a className="link link-hover">
              B-block Mohammadpur, <br /> Dhaka, Bangladesh
            </a>
          </span>
          <span className="flex gap-3 items-center">
            <FaPhoneAlt className="text-xl" />
            <a className="link link-hover">+880 178 096 9001</a>
          </span>
          <span className="flex gap-3 items-center">
            <FaEnvelope className="text-xl" />
            <a className="link link-hover">shohelrana.swe@gmail.com</a>
          </span>
        </div>
      </div>
      <div>
        <p className="text-center text-gray-600 font-bold">
          Copyright &copy; 2023 - All right reserved by ITALIAN RECIPE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
