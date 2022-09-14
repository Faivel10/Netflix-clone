import React from "react";

const Signup = () => {
  return (
    <main className="pt-4 px-4 w-full">
      <h1 className=" text-white font-bold w-full mb-8 text-4xl">Sign Up</h1>
      <form className="w-full block">
        <input
          type="text"
          required
          placeholder="Name"
          className="input"
        />
        <input
          type="text"
          required
          placeholder="Email"
          className="input"
        />
        <input
          required
          type="text"
          placeholder="Phone number"
          className="input"
        />
        <input
          required
          type="password"
          placeholder="Password"
          className="input"
        />
        <input
          required
          type="password"
          placeholder="Repeat password"
          className="input"
        />

        <button className="w-full h-10 mt-6 cursor-pointer text-lg rounded-sm font-bold bg-red-600 text-white">
          Sign In
        </button>
      </form>
    </main>
  );
};

export default Signup;
