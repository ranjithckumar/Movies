import React from 'react';
import './card.styles.css'
export const Card= props => (
  <div className="card-container">
      <h1>Movie:  {props.movies.name} </h1>
      <h2>Actor: {props.movies.actor}</h2>
      <h2>Year:   {props.movies.year}</h2> 
      <h2>Ratings: {props.movies.rating}</h2> 
  </div>
); 