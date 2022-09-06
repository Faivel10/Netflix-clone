import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const Row = ({ title, fetchURL,rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const slideLeft =()=>{
    const slider = document.getElementById('slider' + rowId)
    slider.scrollLeft -= 500;
  }
  const slideRight =()=>{
    const slider = document.getElementById('slider' + rowId)
    slider.scrollLeft += 500;
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex item-center group">
        <MdChevronLeft onClick={slideLeft} className="rounded-full place-self-center left-0 bg-white absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"  size={40}/>
        <div id={"slider"+rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
            <Movie item={item} key={id}/>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} className="rounded-full place-self-center right-0 bg-white absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
      </div>
    </>
  );
};

export default Row;
