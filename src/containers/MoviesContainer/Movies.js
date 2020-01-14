import React, { Component } from 'react';
import axios from '../../axios';
import MovieTitle from './MovieTitle';

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('films');
      const movies = response.data.results;
      this.setState({ movies: movies });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        {this.state.movies ? (
          <MovieTitle moviesArray={this.state.movies} />
        ) : null}
      </div>
    );
  }
}

export default Movies;
