import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");
    setSuccess("");
    signIn(email, password)
      .then((result) => {
        // Signed in
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setSuccess("User loggedIn successfully");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="px-5 md:px-28">
      <div className="mt-16">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl pb-5">
            <h2 className="text-2xl font-semibold text-gray-500 text-center mt-6">
              Login User
            </h2>
            <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div className="form-control mt-5">
                <button
                  type="submit"
                  className="bg-lime-500 py-3 w-full text-white md:font-bold rounded-lg hover:bg-lime-600 transition-all duration-200 ease-in-out"
                >
                  Login
                </button>
              </div>
              <div>
                <p>
                  Don't Have an account ?{" "}
                  <Link to="/register" className="link hover:text-lime-500">
                    Register
                  </Link>
                </p>
              </div>
            </form>
            <div>
              <p className="text-center text-red-500">{error}</p>
              <p className="text-center text-green-500">{success}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <button
            onClick={handleGoogleSignIn}
            className="bg-red-500 py-2 w-80 text-white md:font-bold rounded-lg hover:bg-red-600 transition-all duration-200 ease-in-out"
          >
            <span className="flex gap-2 items-center justify-center text-center">
              <p>Login with google</p> <FaGoogle />
            </span>
          </button>
          <button
            onClick={handleGithubSignIn}
            className="bg-gray-700 py-2 w-80 text-white md:font-bold rounded-lg hover:bg-gray-800 transition-all duration-200 ease-in-out"
          >
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

export default Login;
