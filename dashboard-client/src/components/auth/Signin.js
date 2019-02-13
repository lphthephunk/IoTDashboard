import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class Signin extends Component {
  handleSignin(event) {}

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleSignin)}>
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
            <button>Sign In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "signin" })(Signin);
