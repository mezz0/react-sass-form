import signInFormReducer from "./signInFormReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  signInForm: signInFormReducer,
});

export default rootReducer;