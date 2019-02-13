import axios from "axios";

import { GET_DEVICES_FOR_TILES } from "./types/tile_types";

export const getDevices = callback => async dispatch => {
  await axios
    .get("http://localhost:8080/devices/getDevices")
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
