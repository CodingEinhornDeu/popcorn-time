import React from 'react';

function Movie(props) {

  // let popularMovie;
  // if (props.rating >= 9) {
  //  popularMovie = <p><strong>Popular</strong></p>;
   
  // }
  return (
    <div className="movie">
      <h2>{props.title} </h2>
      <p>Year: {props.year}</p>
      <p>Rating:{props.rating}</p>
      {/* {popularMovie} */}
      {props.rating >=8 ?<h4 className="popular"><strong>Popular</strong></h4> : ""}
    </div>
  );
}

export default Movie;
