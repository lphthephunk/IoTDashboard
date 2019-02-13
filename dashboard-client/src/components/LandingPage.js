import React, { Component } from "react";
import { connect } from "react-redux";

import * as TileActions from "../redux/actions/tile_actions";
import TileContainer from "./tiles/TileContainer";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [{}]
    };
  }
  componentDidMount() {
    if (this.props.authenticated) {
      this.props
        .getDevices()
        .then(result => {
          this.setState({ devices: result });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  renderLandingPage() {
    if (this.props.authenticated) {
      return (
        <TileContainer
          history={this.props.history}
          devices={this.state.devices}
        />
      );
    } else {
      return <h1>Sign in to view devices</h1>;
    }
  }

  render() {
    return <div>{this.renderLandingPage()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth_reducer.authenticated
  };
}

export default connect(
  mapStateToProps,
  TileActions
)(LandingPage);
