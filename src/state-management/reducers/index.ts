import { combineReducers } from "redux";
import { fetchUserDetailsReducer } from "./UserReducer";

const rootReducer = combineReducers({
   fetchUserDetails: fetchUserDetailsReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>