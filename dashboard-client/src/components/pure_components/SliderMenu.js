import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "../component_styles/SliderMenu.css";

export default class SliderMenu extends PureComponent {
  render() {
    const mainContainerVisStyle = {
      opacity: this.props.isOpen ? "1" : "0"
    };

    return (
      <div className="main-container" style={mainContainerVisStyle}>
        <ul>
          {this.props.menuItems
            ? this.props.menuItems.map(({ name, URL }, index) => {
                return (
                  <li key={index}>
                    <Link to={`${URL}`}>{name}</Link>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    );
  }
}
