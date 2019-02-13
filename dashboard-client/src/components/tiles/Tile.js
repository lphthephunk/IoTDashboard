import React from "react";

import "../component_styles/Tile.css";

export default props => {
  const navigateToDetailPage = () => {
    props.history.push(`/tileDetailPage/${props.deviceID}`);
  };

  return (
    <div id="tile" className="main-tile" onClick={navigateToDetailPage}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
};
