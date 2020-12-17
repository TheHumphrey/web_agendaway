import { combineReducers } from "redux";

import user from "./user/reducer";
import isAuth from "./isAuth/reducer";

const rootReducer = combineReducers({ user, isAuth });

export default rootReducer;
