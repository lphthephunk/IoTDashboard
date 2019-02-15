import axios from "axios";

import {
  GET_DEVICES_FOR_TILES,
  GET_DEVICE_TELEMETRY
} from "./types/tile_types";

export const getDevices = callback => async dispatch => {
  await axios
    .post("http://localhost:8080/deviceInitializer/listenForDevices")
    .then(result => {
      dispatch({
        type: GET_DEVICES_FOR_TILES,
        payload: result.data
      });

      callback();
    })
    .catch(err => {
      console.log(err);
    });
};

export const getDeviceTelemetry = () => async dispatch => {
  // TODO pass in the topic to subscribe to instead of hard coding weather devices
  await axios
    .post("http://localhost:8080/weatherDevices/listenForWeatherDeviceChanges")
    .then(result => {
      dispatch({
        type: GET_DEVICE_TELEMETRY,
        payload: result.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
