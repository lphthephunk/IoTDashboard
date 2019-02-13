import {
  GET_DEVICE_TELEMETRY,
  GET_DEVICES_FOR_TILES
} from "../actions/types/tile_types";

const INITIAL_STATE = {
  devices: [{}]
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DEVICES_FOR_TILES:
      return { ...state, ...action.payload };
    case GET_DEVICE_TELEMETRY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
