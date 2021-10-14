import loginAction from "./Login/loginAction";
import signUpAction from "./SignUp/signUpAction";
import createWorkLogAction from "./CreateWorkLog/createWorkLogAction";
import createRegularUserAction from "./CreateRegularUser/createRegularUserAction";
import getUserAction from "./GetUser/getUserAction";
import getUserLogAction from "./GetUserLog/getUserLogAction";
import deleteUserAction from "./DeleteUser/deleteUserAction";
import updateUserAction from "./UpdateUser/updateUserAction";
import updateLogAction from "./UpdateLog/updateLogAction"
import updateWorkingHourAction from "./UpdateWorkingHours/updateWorkingHourAction"
const allActions = {
  loginAction,
  signUpAction,
  createRegularUserAction,
  getUserAction,
  createWorkLogAction,
  getUserLogAction,
  deleteUserAction,
  updateUserAction,
  updateLogAction,
  updateWorkingHourAction
};

export default allActions;
