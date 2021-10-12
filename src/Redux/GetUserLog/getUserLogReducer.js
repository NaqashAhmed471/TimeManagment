import {
  GET_USER_LOG_REQUEST,
  GET_USER_LOG_SUCCESS,
  GET_USER_LOG_FAILURE,
} from "./getUserLogType.js";
const initialState = {
  loading: false,
  logUserData: [],
  error: "",
};
const getUserLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_LOG_SUCCESS:
      return {
        loading: false,
        logUserData: action.payload,
        error: "",
      };
    case GET_USER_LOG_FAILURE:
      return {
        loading: false,
        logUserData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getUserLogReducer;
