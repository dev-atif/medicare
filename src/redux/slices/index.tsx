import { combineReducers } from "redux";
import token from "./token-slices";
const rootReducer = combineReducers({
  token: token,
});

export default rootReducer;
