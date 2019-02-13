import axios from "axios";

import { GET_DEVICES_FOR_TILES } from "./types/tile_types";

export const getDevices = () => async dispatch => {
  const result = await axios.get("http://localhost:8080/devices/getDevices");

  dispatch({
    type: GET_DEVICES_FOR_TILES,
    payload: result.data
  });

  return result.data;
};
