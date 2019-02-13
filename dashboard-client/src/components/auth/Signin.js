import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";

import "../component_styles/Signin.css";
import * as AuthActions from "../../redux/actions/auth_actions";

class Signin extends Component {
  handleSignin = e => {
    this.props.signIn(() => {
      this.props.history.push("/");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="signin-border-div">
        <h2>Sign In</h2>
        <form>
          <div>
            <Field
              name="username"
              type="text"
              component="input"
              placeholder="Username"
            />
          </div>
          <div>
            <Field
              name="password"
              type="password"
              component="input"
              placeholder="Password"
            />
          </div>
          <div>
            <Button onClick={handleSubmit(this.handleSignin)}>Sign In</Button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default compose(
  connect(
    mapStateToProps,
    AuthActions
  ),
  reduxForm({ form: "signin" })
)(Signin);
