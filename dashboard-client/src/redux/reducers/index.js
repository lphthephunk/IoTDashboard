import { combineReducers } from "redux";
import auth_reducer from "./auth_reducer";
import tile_reducer from "./tile_reducer";

export default combineReducers({
  auth_reducer,
  tile_reducer
});
