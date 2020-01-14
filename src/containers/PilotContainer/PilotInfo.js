import React, { Component } from 'react';

class PilotInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favouritePilots: []
    };
  }

  renderPilotInfo = () => {
    return (
      <div>
        <h4>Name: {this.props.showPilotDetails.name}</h4>
        <h5>Height: {this.props.showPilotDetails.height}cm</h5>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Pilot Info</h1>
        <div>{this.renderPilotInfo()}</div>
      </div>
    );
  }
}

export default PilotInfo;
