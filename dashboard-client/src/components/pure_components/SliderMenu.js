import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "../component_styles/SliderMenu.css";

export default class SliderMenu extends PureComponent {
  render() {
    const mainContainerVisStyle = {
      opacity: this.props.isOpen ? "1" : "0",
      visibility: this.props.isOpen ? "visible" : "collapse"
    };

    const liVisStyle = {
      visibility: this.props.isOpen ? "visible" : "collapse"
    };

    return (
      <div className="main-container" style={mainContainerVisStyle}>
        <ul>
          {this.props.menuItems
            ? this.props.menuItems.map(({ name, URL, event }, index) => {
                return (
                  <li key={index} style={liVisStyle}>
                    <Link to={`${URL}`} onClick={event}>
                      {name}
                    </Link>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    );
  }
}
