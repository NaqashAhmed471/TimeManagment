import { combineReducers } from "redux";
import loginReducer from "./Login/loginReducer";
import signUpReducer from "./SignUp/signUpReducer";
// import createWorkLogReducer from "./CreateWorkLog/createWorkLogReducer";
import createRegularUserReducer from "./CreateRegularUser/createRegularUserReducer";
import getUserReducer from "./GetUser/getUserReducer";
const rootReducer = combineReducers({
  loginReducer,
  signUpReducer,
  createRegularUserReducer,
  getUserReducer,
  // createWorkLogReducer,
});
export default rootReducer;
