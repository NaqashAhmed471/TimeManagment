import { combineReducers } from "redux";
import loginReducer from "./Login/loginReducer";
import signUpReducer from "./SignUp/signUpReducer";
import createWorkLogReducer from "./CreateWorkLog/createWorkLogReducer";
import createRegularUserReducer from "./CreateRegularUser/createRegularUserReducer";
import getUserReducer from "./GetUser/getUserReducer";
import getUserLogReducer from "./GetUserLog/getUserLogReducer";
import deleteUserReducer from "./DeleteUser/deleteUserReducer";
import updateUserReducer from "./UpdateUser/updateUserReducer";
import updateLogReducer from "./UpdateLog/updateLogReducer";
import updateWorkingHoursReducer from "./UpdateWorkingHours/updateWorkingHoursReducer"
const rootReducer = combineReducers({
  loginReducer,
  signUpReducer,
  createRegularUserReducer,
  getUserReducer,
  createWorkLogReducer,
  getUserLogReducer,
  deleteUserReducer,
  updateUserReducer,
  updateLogReducer,
  updateWorkingHoursReducer
});
export default rootReducer;
