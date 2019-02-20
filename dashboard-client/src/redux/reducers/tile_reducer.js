import {
  GET_DEVICE_TELEMETRY,
  GET_DEVICES_FOR_TILES,
  STORE_WEATHER_DEVICE_TELEMETRY
} from "../actions/types/tile_types";

const INITIAL_STATE = {
  devices: "",
  deviceTelemetry: "",
  weatherDeviceTelemetry: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DEVICES_FOR_TILES:
      return { ...state, devices: action.payload };
    case GET_DEVICE_TELEMETRY:
      return { ...state, deviceTelemetry: action.payload };
    case STORE_WEATHER_DEVICE_TELEMETRY:
      return {
        ...state.weatherDeviceTelemetry,
        weatherDeviceTelemetry: action.payload
      };
    default:
      return state;
  }
}
