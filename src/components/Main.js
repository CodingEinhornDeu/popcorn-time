import React from 'react';
import moviesArr from './data/movies.json';
import Movie  from './Movie';

function Main() {
  return (
    <>
      {moviesArr.map((movie) => {
        return <Movie title = {movie.title}
        year = {movie.year}
        rating ={movie.rating}
         />;
      })}

    </>
  );
}

export default Main;
