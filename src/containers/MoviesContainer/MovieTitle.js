import React, { Component } from 'react';
import MovieDetails from '../../components/Movies/MovieDetails';

class MovieTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      movieDetails: '',
      starShips: []
    };
  }

  getMovieDesc = episodeId => {
    const movieDetails = this.props.moviesArray.find(
      episode => episode.episode_id === episodeId
    );
    this.setState({
      showDetails: true,
      movieDetails: movieDetails,
      starShips: movieDetails.starships
    });
  };

  renderMovies = () => {
    return this.props.moviesArray.map(movie => {
      return (
        <div className='list' key={movie.episode_id}>
          <ul>
            <li onClick={() => this.getMovieDesc(movie.episode_id)}>
              {movie.title}
            </li>
          </ul>
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <div>
          <h3>Movies</h3>
          {this.renderMovies()}
        </div>
        <div>
          {this.state.showDetails ? (
            <MovieDetails
              movieDetails={this.state.movieDetails}
              starShips={this.state.starShips}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default MovieTitle;
