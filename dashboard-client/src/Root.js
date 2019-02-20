import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./redux/reducers";
import React from "react";
import reduxThunk from "redux-thunk";

export default ({
  children,
  initialState = {
    auth_reducer: { authenticated: localStorage.getItem("token") }
  }
}) => {
  const middleWare = [reduxThunk];
  let store;

  if (window.navigator.userAgent.includes("Chrome")) {
    store = createStore(
      reducers,
      initialState,
      compose(
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );
  } else {
    store = createStore(
      reducers,
      initialState,
      compose(applyMiddleware(...middleWare))
    );
  }

  return <Provider store={store}>{children}</Provider>;
};
