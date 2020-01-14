import React, { Component } from 'react';
import Starship from './Starship';

class StarshipList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStarShipDetails: false,
      starshipInfo: ''
    };
  }

  handleClick = e => {
    e.preventDefault();
    const link = e.currentTarget.href;
    fetch(`${link}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ showStarShipDetails: true, starshipInfo: data });
      });
  };

  render() {
    return (
      <>
        <div className='starship-container'>
          <div className='starship-list'>
            <h1>Starships List</h1>
            <p>
              {this.props.starShips.map(starship => {
                return (
                  <div key={starship}>
                    <a href={starship} onClick={e => this.handleClick(e)}>
                      {starship}
                    </a>
                  </div>
                );
              })}
            </p>
          </div>
          <div className='starship-info'>
            {this.state.showStarShipDetails ? (
              <Starship starShipDetails={this.state.starshipInfo} />
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default StarshipList;
