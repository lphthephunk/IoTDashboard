import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import reducers from "./redux/reducers";

const INITIAL_STATE = {
  auth: { authenticated: localStorage.getItem("token") }
};

const middleWare = [reduxThunk];

let store;

if (window.navigator.userAgent.includes("Chrome")) {
  store = createStore(
    reducers,
    INITIAL_STATE,
    compose(
      applyMiddleware(...middleWare),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    reducers,
    INITIAL_STATE,
    compose(applyMiddleware(...middleWare))
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);