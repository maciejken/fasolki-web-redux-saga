import { combineReducers } from "redux";
import beansReducer from "src/features/beans";

const rootReducer = combineReducers({
  // Add your reducers here
  beans: beansReducer,
});

export default rootReducer;
