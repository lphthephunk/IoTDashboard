import React, { Component } from "react";
import { getDevices } from "./../../redux/actions/tile_actions";

class TileContainer extends Component {
  componentDidMount() {
    this.props.getDevices(() => {
      // TODO: set the devices in the state
    });
  }

  render() {
    return <div />;
  }
}

export default TileContainer;
