import repositories from "./Repositories";
import { combineReducers } from "redux";

const reducers = combineReducers({
  repositories,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
