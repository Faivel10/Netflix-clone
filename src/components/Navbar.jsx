import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl cursor-pointer font-bold">
          NETFLIX
        </h1>
      </Link>
      <div className="text-white">
        <Link to="/login">
          <button className="pr-4">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 px-6 cursor-pointer rounded  py-2">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
