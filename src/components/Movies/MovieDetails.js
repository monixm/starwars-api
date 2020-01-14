import React from 'react';
import StarshipList from '../../containers/StarshipContainer/StarshipList';
import './style.css';

const MovieDetails = props => {
  return (
    <div className='movie-details'>
      <div className='movie-details-inner'>
        <div className='movie-details-content'>
          <h1>{props.movieDetails.title}</h1>
          <h4>{props.movieDetails.opening_crawl}</h4>
        </div>
        <div className='starships'>
          <p>
            <StarshipList starShips={props.starShips} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
