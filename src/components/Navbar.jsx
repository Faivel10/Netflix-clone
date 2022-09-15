import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user);
  return (
    <header className="flex items-center justify-between p-4 z-[100] w-full sm:absolute">
      <Link to="/">
        <h1 className="text-red-600 text-3xl cursor-pointer font-bold">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="text-white">
          <Link to="/account">
            <button className="pr-4">Account</button>
          </Link>
            <button className="bg-red-600 px-6 cursor-pointer rounded  py-2" onClick={logoutHandler}>
              Logout
            </button>
        </div>
      ) : (
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
      )}
    </header>
  );
};

export default Navbar;
