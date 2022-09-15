import React from "react";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const {user,signUp} = UserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secpassword, setSecPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  
  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== secpassword) {
      setError("Passwords do not match!");
      console.log(error);
      return;
    }
    try {
      await signUp(email,password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="pt-4 px-4 w-full h-screen sm:pt-0 sm:px-0">
      <img
        className="hidden md:block absolute w-full h-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/2c7b9789-0d12-403b-8400-5c072360cd7e/IL-en-20220912-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
      />
      <div className="hidden sm:block bg-black/60 fixed top-0 left-0 w-full h-screen -z-1"></div>
      <main className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white py-16 px-4 rounded-md">
          <h1 className=" text-white font-bold w-full mb-8 text-4xl">
            Sign Up
          </h1>
          {error && <p className="p-3 bg-red-400 my-2">{error}</p> }
          <form className="w-full block z-10" onSubmit={submitHandler}>
            <input
              type="text"
              required
              placeholder="Email"
              className="input"
              autoCapitalize="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              autoComplete="password"
              placeholder="Password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Repeat password"
              className="input"
              onChange={(e) => setSecPassword(e.target.value)}
            />

            <button className="w-full h-10 my-6 cursor-pointer text-lg rounded font-bold bg-red-600 text-white">
              Sign Up
            </button>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <p>
                <input type="checkbox" className="mr-2" />
                Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <p className="py-8">
              <span className="text-gray-600">Aleady registered to Netflix+?</span>
              <Link to='/login'>
              Sign In
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;
