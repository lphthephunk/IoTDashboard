import React, { Component } from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { connect } from "react-redux";

import * as DeviceActions from "../../redux/actions/tile_actions";
import { LineChart } from "react-easy-chart";
import { ChartLegend } from ".";
import * as chartFuns from "../../helpers/normalizeChartData";

var stompClient;

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      axisLabels: this.props.axisLabels,
      margin: this.props.margin,
      yType: this.props.yType ? this.props.yType : "number",
      xType: this.props.xType ? this.props.xType : "number",
      lineColors: this.props.lineColors ? this.props.lineColors : "",
      axes: this.props.isUseAxes ? this.props.isUseAxes : false,
      grid: this.props.isUseGrid ? this.props.isUseGrid : false,
      width: this.props.width ? this.props.width : 0,
      height: this.props.height ? this.props.height : 0,
      interpolate: this.props.interpolate ? this.props.interpolate : "cardinal"
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));

    let sock = new SockJS("http://localhost:8080/iot-socket");
    stompClient = Stomp.over(sock);
    stompClient.connect({}, () => {
      stompClient.subscribe(
        `/topic/listenForChanges/${this.props.deviceID}`,
        message => {
          let newData = JSON.parse(message.body);
          let normalizedData = chartFuns.normalizeData(
            this.props.deviceType,
            newData
          );
          this.props.storeDeviceTelemetry(
            this.props.deviceType,
            normalizedData
          );
        }
      );
      this.props.getDeviceTelemetry(this.props.deviceID, this.props.deviceType);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
    stompClient.disconnect();
  }

  handleResize() {
    this.setState({
      width: window.innerWidth - 100,
      height: window.innerHeight - 100
    });
  }

  mouseOverHandler(d, e) {
    // this.setState({
    //   showToolTip: true,
    //   top: `${e.screenY - 10}px`,
    //   left: `${e.screenX + 10}px`,
    //   y: d.y,
    //   x: d.x
    // });
  }

  mouseMoveHandler(e) {
    // if (this.state.showToolTip) {
    //   this.setState({ top: `${e.y - 10}px`, left: `${e.x + 10}px` });
    // }
  }

  mouseOutHandler() {
    // this.setState({ showToolTip: false });
  }

  render() {
    const legendItems = [
      { value: "Humidity", color: "Red" },
      { value: "Fahrenheit", color: "Green" },
      { value: "Celcius", color: "Blue" }
    ];

    return (
      <div>
        {!this.props.data ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <LineChart
              axisLabels={this.state.axisLabels}
              margin={this.state.margin}
              xType={this.state.xType}
              lineColors={this.state.lineColors}
              axes={true}
              grid={true}
              width={this.state.width}
              height={this.state.height}
              interpolate={this.state.interpolate}
              data={this.props.data}
              mouseMoveHandler={this.mouseMoveHandler.bind(this)}
              mouseOutHandler={this.mouseOutHandler.bind(this)}
              mouseOverHandler={this.mouseOverHandler.bind(this)}
            />
            <ChartLegend legendItems={legendItems} />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.tile_reducer.weatherDeviceTelemetry };
}

export default connect(
  mapStateToProps,
  DeviceActions
)(LineGraph);
