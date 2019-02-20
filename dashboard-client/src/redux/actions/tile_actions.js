import axios from "axios";

import {
  GET_DEVICES_FOR_TILES,
  GET_DEVICE_TELEMETRY,
  STORE_WEATHER_DEVICE_TELEMETRY
} from "./types/tile_types";

import { WeatherDevice, DogFeederDevice } from "./../../helpers/deviceTypes";

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

export const getDeviceTelemetry = (deviceID, deviceType) => async dispatch => {
  switch (deviceType) {
    case WeatherDevice:
      getWeatherDeviceTelemetry(deviceID, dispatch);
      break;
    case DogFeederDevice:
      getDogFeederTelemetry(deviceID, dispatch);
      break;
    default:
      break;
  }
};

export const storeDeviceTelemetry = (deviceType, data) => dispatch => {
  switch (deviceType) {
    case WeatherDevice:
      storeWeatherDeviceTelemetry(data, dispatch);
    default:
      break;
  }
};

function storeWeatherDeviceTelemetry(data, dispatch) {
  dispatch({
    type: STORE_WEATHER_DEVICE_TELEMETRY,
    payload: data
  });
}

async function getWeatherDeviceTelemetry(deviceID, dispatch) {
  await axios
    .post("http://localhost:8080/weatherDevices/listenForChanges", null, {
      params: {
        deviceID: deviceID
      }
    })
    .then(result => {
      dispatch({
        type: GET_DEVICE_TELEMETRY,
        payload: result.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}

async function getDogFeederTelemetry(deviceID, dispatch) {}
