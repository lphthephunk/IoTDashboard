import React from "react";

export default props => {
  return (
    <div>
      <h3>Legend</h3>
      <ul>
        {props.legendItems
          ? props.legendItems.map((item, index) => {
              return (
                <li key={index} style={{ color: item.color }}>
                  {item.value}
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
};
