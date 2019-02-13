import { USER_AUTH } from "./types/auth_types";

export const signOut = callback => dispatch => {
  localStorage.removeItem("token");

  dispatch({
    type: USER_AUTH,
    payload: ""
  });

  callback();
};

export const signIn = callback => dispatch => {
  localStorage.setItem("token", "test");

  dispatch({
    type: USER_AUTH,
    payload: localStorage.getItem("token")
  });

  callback();
};
