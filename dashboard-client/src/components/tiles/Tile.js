import React from "react";

export default props => {
  return (
    <div>
      {this.props.devices.map(({ name, description }, index) => {
        return (
          <div key={index} className="main-div">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};
