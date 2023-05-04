import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    setError("");
    setSuccess("");
    createUser(email, password)
      .then((result) => {
        // Signed in
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess("User registration successfully");
        updateUserProfile(name, photo)
          .then((result) => {
            const name = result.name;
            const photo = result.photo;
            console.log(name, photo);
          })
          .catch((error) => console.log(error.message));
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorMessage);
      });
  };

  return (
    <div className="px-5 md:px-28">
      <div className="mt-16">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl pb-5">
            <h2 className="text-2xl font-semibold text-gray-500 text-center mt-5">
              Create a new account
            </h2>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control my-3">
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-3">
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-5">
                <button
                  type="submit"
                  className="bg-lime-500 py-3 w-full text-white md:font-bold rounded-lg hover:bg-lime-600 transition-all duration-200 ease-in-out"
                >
                  Register
                </button>
              </div>
              <p className="text-center">
                Already Have an account ?{" "}
                <Link to="/login" className="link hover:text-lime-500">
                  Login
                </Link>
              </p>
            </form>
            <div>
              <p className="text-center text-red-500">{error}</p>
              <p className="text-center text-green-500">{success}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <button className="bg-red-500 py-2 w-80 text-white md:font-bold rounded-lg hover:bg-red-600 transition-all duration-200 ease-in-out">
            <span className="flex gap-2 items-center justify-center text-center">
              <p>Login with google</p> <FaGoogle />
            </span>
          </button>
          <button className="bg-gray-700 py-2 w-80 text-white md:font-bold rounded-lg hover:bg-gray-800 transition-all duration-200 ease-in-out">
            <span className="flex gap-2 items-center justify-center text-center">
              <p>Login with github </p>
              <FaGithub />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
