import { render } from '@testing-library/react';
import React from 'react';


function Main() {

  const moviesArr = [
    {
      id: 1,
      title: "Billy Elliot",
      rating: 9
    },
    {
      id: 2,
      title: "Forrest Gump",
      rating: 9
    },
    {
      id: 3,
      title: "The Lion King",
      rating: 10
    }
  ];

  // function renderMovies() {
  //   let someJsx = [];
  //   moviesArr.forEach((movie) => {
  
  //     someJsx.push(<div>Title: {movie.title}</div>)
  //   });
  //   return someJsx;
  // }

  return (
    <>
      {moviesArr.map((movie)=>{
       return( 
      <div key={movie.id}>
       <h2>{movie.title} </h2>
      Rating:{movie.rating}
      </div>
      );
      })}
     
    </>
  );
}

export default Main;
