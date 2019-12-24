import React from 'react';
import { Card} from '../card/card.component'
import './card-list.styles.css';

export const CardList= props => (
  <div className="card-list">
      {props.movies.map(movies=>(
        // here we calling card component by passing movies state as props
        <Card key={movies.id} movies={movies} />
    ))}
    
  </div>
);