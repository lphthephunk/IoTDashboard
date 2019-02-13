import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";

import "./component_styles/Header.css";
import * as AuthActions from "../redux/actions/auth_actions";
import * as DeviceActions from "../redux/actions/tile_actions";
import SliderMenu from "./pure_components/SliderMenu";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {}

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
    if (this.props.authenticated) {
      this.setState({
        menuItems: [
          { name: "Manage Devices", URL: "/manageDevices" },
          { name: "Sign Out", URL: "/", event: this.handleSignOut.bind(this) }
        ]
      });
    } else {
      this.setState({
        menuItems: [
          { name: "Manage Devices", URL: "/manageDevices" },
          {
            name: "Sign In",
            URL: "/signin",
            event: this.handleSigninClick.bind(this)
          },
          { name: "Register", URL: "/register" }
        ]
      });
    }
  }

  handleSignOut(e) {
    e.preventDefault();
    this.props.signOut(() => {
      this.setState({ isOpen: false });
    });
  }

  handleSigninClick(e) {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <Navbar bg="navbar-dark bg-dark navbar sticky-top" expand="lg">
          <HamburgerMenu
            isOpen={this.state.isOpen}
            menuClicked={this.handleClick.bind(this)}
            width={18}
            height={15}
            strokeWidth={2}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.3}
          />
          <Navbar.Brand>
            <Link className="navbar-title" to="/">
              IoT Dashboard
            </Link>
          </Navbar.Brand>
        </Navbar>
        <SliderMenu
          menuItems={this.state.menuItems}
          isOpen={this.state.isOpen}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth_reducer.authenticated };
}

export default compose(
  connect(
    mapStateToProps,
    AuthActions
  )
)(Header);
