import { combineReducers } from "redux";
import {Animal } from "./Reducer";
export const rootReducer = combineReducers({
   Animal: Animal
});
