import {
  GET_DEVICE_TELEMETRY,
  GET_DEVICE_INFO
} from "../actions/types/tile_types";

const INITIAL_STATE = {
  name: "",
  description: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DEVICE_INFO:
      return { ...state, ...action.payload };
    case GET_DEVICE_TELEMETRY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
