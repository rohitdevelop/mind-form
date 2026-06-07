import { createStore, combineReducers } from "redux";
import authReducer from "./authSlice";
import habitReducer from "./habitSlice";

const rootReducer = combineReducers({ auth: authReducer, habit: habitReducer });
const store = createStore(rootReducer);
export default store;
