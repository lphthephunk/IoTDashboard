import React, { Component } from "react";
import { BarChart } from "react-easy-chart";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { connect } from "react-redux";

import "../component_styles/TileDetailPage.css";
import * as DeviceActions from "../../redux/actions/tile_actions";

class TileDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{}]
    };
  }

  componentDidMount() {
    let sock = new SockJS("http://localhost:8080/iot-socket");
    let stompClient = Stomp.over(sock);
    stompClient.connect({}, () => {
      // TODO: pass in the subscribtion topic to subscribe to
      stompClient.subscribe("/topic/listenForWeatherDeviceChanges", message => {
        let newData = JSON.parse(message.body);
        let convertedMap = [];
        for (let data of newData) {
          data.lastStateChange = new Date(data.lastStateChange.iMillis);
          convertedMap.push({ x: data.lastStateChange, y: "" });
        }

        console.log(convertedMap);

        this.setState({ data: convertedMap });
      });

      this.props.getDeviceTelemetry();
    });
  }

  render() {
    return (
      <div className="graph-div">
        <BarChart
          axisLabels={{ x: "Day of month", y: "Some Y value" }}
          width={Number(window.innerWidth / 2)}
          height={Number(window.innerHeight / 2)}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default connect(
  null,
  DeviceActions
)(TileDetailPage);
