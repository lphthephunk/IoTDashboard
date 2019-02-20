import React, { Component } from "react";
import { BarChart } from "react-easy-chart";

class Barchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.chartData,
      labels: props.axisLabels,
      margin: props.margin,
      height: props.height,
      width: props.width,
      xType: props.xType,
      yType: props.yType,
      isMultiColored: props.isMultiColored,
      isUseGrid: props.isUseGrid,
      barWidth: props.barWidth,
      isUseAxis: props.isUseAxis,
      showToolTip: false
    };
  }

  mouseOverHandler(d, e) {}

  mouseMoveHandler(e) {}

  mouseOutHandler() {}

  render() {
    return (
      <div>
        {!this.state.data ? (
          <h1>Loading...</h1>
        ) : (
          <BarChart
            axisLabels={this.state.labels}
            margin={this.state.margin}
            barWidth={this.state.barWidth}
            colorBars={this.state.isMultiColored}
            grid={this.state.isUseGrid}
            axes={this.state.isUseAxis}
            height={this.state.height}
            width={this.state.width}
            data={this.state.data}
            mouseOverHandler={this.mouseOverHandler.bind(this)}
            mouseOutHandler={this.mouseOutHandler.bind(this)}
            mouseMoveHandler={this.mouseMoveHandler.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default Barchart;
