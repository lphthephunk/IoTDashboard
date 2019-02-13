import React from "react";

import "../component_styles/TileContainer.css";
import Tile from "./Tile";

export default props => {
  return (
    <div className="tile-container-main">
      {props.devices
        ? props.devices
            .sort((a, b) => {
              if (a.lastStateChange < b.lastStateChange) {
                return 1;
              } else {
                return -1;
              }
            })
            .map(({ name, description, deviceID }, index) => {
              return (
                <div key={index}>
                  <Tile
                    name={name}
                    description={description}
                    deviceID={deviceID}
                    history={props.history}
                  />
                </div>
              );
            })
        : ""}
    </div>
  );
};
