import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  //pick a random movie for the hero section
  const movie = movies[Math.floor(Math.random() * movies.length)];

  console.log(movie);
  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const cutString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[30rem] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[30rem] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-grey-300 py-2 px-5">
              Play
            </button>

            <button className="border text-white border-grey-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-grey-400 text-sm">
            Released: {movie?.release_date}{" "}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {cutString(movie?.overview,150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
