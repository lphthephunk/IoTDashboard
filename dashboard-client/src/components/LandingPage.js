import React, { Component } from "react";
import { connect } from "react-redux";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

import * as DeviceActions from "../redux/actions/tile_actions";
import TileContainer from "./tiles/TileContainer";

var stompClient;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetchingData: false
    };
  }
  componentDidMount() {
    if (this.props.authenticated) {
      let sock = new SockJS("http://localhost:8080/iot-socket");
      stompClient = Stomp.over(sock);
      stompClient.connect({}, () => {
        stompClient.subscribe("/topic/listenForDevices", message => {
          let fetchedDevices = JSON.parse(message.body);
          console.log(fetchedDevices);
          this.setState({ devices: fetchedDevices });
        });

        this.setState({ isFetchingData: true });
        this.props.getDevices(() => {
          this.setState({ isFetchingData: false });
        });
      });
    }
  }

  componentWillUnmount() {
    if (stompClient) {
      stompClient.disconnect();
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
      return <h1 style={{ textAlign: "center" }}>Sign in to view devices</h1>;
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
  DeviceActions
)(LandingPage);
