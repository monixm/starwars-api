import React, { Component } from 'react';
import './style.css';
import PilotInfo from '../PilotContainer/PilotInfo';

class StarShip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPilotDetails: false,
      pilotInfo: ''
    };
  }

  handleClick = e => {
    e.preventDefault();
    const link = e.currentTarget.href;
    fetch(`${link}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ showPilotDetails: true, pilotInfo: data });
      });
  };

  renderPilots = () => {
    if (this.props.starShipDetails.pilots.length === 0) {
      return 'There is no pilot information available';
    } else {
      return this.props.starShipDetails.pilots.map(pilot => {
        return (
          <div key={pilot}>
            <a href={pilot} onClick={e => this.handleClick(e)}>
              {pilot}
            </a>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <h1>Starship Info</h1>
          <h4>Name: {this.props.starShipDetails.name}</h4>
          <p>Cost ${this.props.starShipDetails.cost_in_credits}</p>
          <div>{this.renderPilots()}</div>
          <div>
            {this.state.showPilotDetails ? (
              <PilotInfo showPilotDetails={this.state.pilotInfo} />
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default StarShip;
