import { USER_AUTH } from "../actions/types/auth_types";

const INITIAL_STATE = {
  authenticated: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_AUTH:
      return { ...state, authenticated: action.payload };
    default:
      return state;
  }
}
