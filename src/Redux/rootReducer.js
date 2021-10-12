import { combineReducers } from "redux";
import loginReducer from "./Login/loginReducer";
import signUpReducer from "./SignUp/signUpReducer";
import createWorkLogReducer from "./CreateWorkLog/createWorkLogReducer";
import createRegularUserReducer from "./CreateRegularUser/createRegularUserReducer";
import getUserReducer from "./GetUser/getUserReducer";
import getUserLogReducer from "./GetUserLog/getUserLogReducer";
const rootReducer = combineReducers({
  loginReducer,
  signUpReducer,
  createRegularUserReducer,
  getUserReducer,
  createWorkLogReducer,
  getUserLogReducer,
});
export default rootReducer;
