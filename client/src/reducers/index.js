import { combineReducers } from "redux";
import authReducer from './auth'
import currentUserReducer from './currentUser'

const rootReducer = combineReducers({
    auth: authReducer,
    currentUser:currentUserReducer
    // Add other reducers here if needed
  });
  
  export default rootReducer;