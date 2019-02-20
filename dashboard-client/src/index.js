import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Root from "./Root";
import App from "./components/App";
import LandingPage from "./components/LandingPage";
import Signin from "./components/auth/Signin";
import TileDetailPage from "./components/tiles/TileDetailPage";
import Header from "./components/Header";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signin" component={Signin} />
        <Route
          exact
          path="/tileDetailPage/:topic/:deviceID"
          component={TileDetailPage}
        />
      </App>
    </BrowserRouter>
  </Root>,
  document.querySelector("#root")
);
