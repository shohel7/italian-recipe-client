import React, { useContext, useState } from "react";
import { FaUtensils } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";
import "./NavigationBar.css";

const NavigationBar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        const userLogout = result.user;
        console.log(userLogout);
        toast("successfully logged out");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="px-5 md:px-28 mx-0">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-base"
            >
              <li className="hover:text-lime-500 transition-all duration-200 ease-in-out">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-lime-500 transition-all duration-200 ease-in-out">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="hover:text-lime-500 transition-all duration-200 ease-in-out">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li className="hover:text-lime-500 transition-all duration-200 ease-in-out">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <span className="flex justify-center">
              <FaUtensils className="text-5xl text-lime-500" />
            </span>
            <p className="text-xl font-semibold cursor-pointer">
              ITALIANO <span className="text-lime-500">RECIPE</span>
            </p>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu-horizontal px-1 space-x-10 text-gray-800 font-semibold text-lg">
            <li className="hover:text-lime-500 transition-all duration-200 ease-in-out">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-lime-500 transition-all duration-200 ease-in-out">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="hover:text-lime-500 transition-all duration-200 ease-in-out">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            {user ? (
              <div className="flex">
                {user && (
                  <p className="text-gray-800 font-semibold md:text-lg mr-3">
                    {user?.displayName}
                  </p>
                )}
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      {user && <img src={user?.photoURL} alt="profile-img" />}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li onClick={handleLogout}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <li className="hover:text-lime-500 transition-all duration-200 ease-in-out">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        {/* <div className="navbar-end">
          {user && (
            <p className="text-gray-800 font-semibold md:text-lg mr-3">
              {user?.displayName}
            </p>
          )}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user && <img src={user?.photoURL} alt="profile-img" />}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NavigationBar;
