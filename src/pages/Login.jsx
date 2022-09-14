import React from "react";

const Login = () => {
  return (
    <main className="pt-4 px-4 w-full">
      <h1 className=" text-white font-bold w-full mb-8 text-4xl">Sign In</h1>
      <form className="w-full block">
        <input
          type="text"
          placeholder="Email or phone number"
          className="text-white w-full placeholder:text-base  p-2 rounded-md bg-zinc-800 box-border my-2 outline-none text-lg border-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-white w-full placeholder:text-base  p-2 rounded-md bg-zinc-800 box-border my-4 outline-none text-lg border-none"
        />

        <button className="w-full h-10 mt-6 cursor-pointer text-lg rounded-sm font-bold bg-red-600 text-white">
          Sign In
        </button>
      </form>
    </main>
  );
};

export default Login;
