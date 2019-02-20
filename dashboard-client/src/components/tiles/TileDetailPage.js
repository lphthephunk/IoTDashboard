import React, { Component } from "react";
import { connect } from "react-redux";

import "../component_styles/TileDetailPage.css";
import * as DeviceActions from "../../redux/actions/tile_actions";
import * as ChartsAndGraphs from "../chartsAndGraphs";
import { WeatherDevice } from "../../helpers/deviceTypes";

class TileDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceID: this.props.match.params.deviceID,
      topic: this.props.match.params.topic
    };
  }

  renderChart() {
    switch (this.state.topic) {
      case WeatherDevice:
        return (
          <div>
            <ChartsAndGraphs.LineGraph
              deviceID={this.state.deviceID}
              deviceType={this.state.topic}
              axisLabels={{ x: "Report Time", y: "Readings" }}
              margin={{ top: 10, right: 30, bottom: 50, left: 70 }}
              xType={"text"}
              lineColors={["green", "blue", "red"]}
              isUseAxes={true}
              isUseGrid={true}
              width={window.innerWidth - 100}
              height={window.innerHeight - 100}
              interpolate={"cardinal"}
            />
          </div>
        );
      default:
        return <h1>Device not supported</h1>;
    }
  }

  render() {
    return <div>{this.renderChart()}</div>;
  }
}

export default connect(
  null,
  DeviceActions
)(TileDetailPage);
