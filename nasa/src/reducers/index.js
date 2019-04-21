import { combineReducers } from "redux";
import nasaReducer from "./nasaReducer";

export default combineReducers({
  nasa: nasaReducer
});
