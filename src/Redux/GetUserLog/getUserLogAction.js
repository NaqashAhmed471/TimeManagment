import axios from "axios";
import {
  GET_USER_LOG_REQUEST,
  GET_USER_LOG_SUCCESS,
  GET_USER_LOG_FAILURE,
} from "./getUserLogType.js";

const getUserLogRequest = () => {
  return {
    type: GET_USER_LOG_REQUEST,
  };
};

const getUserLogSuccess = (userLogData) => {
  return {
    type: GET_USER_LOG_SUCCESS,
    payload: userLogData,
  };
};

const getUserLogFailure = (error) => {
  return {
    type: GET_USER_LOG_FAILURE,
    payload: error,
  };
};

const getUserLogData = () => {
  let token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(getUserLogRequest);
    axios
      .get("http://34.210.129.167/api/work-logs", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userLogData = response.data;
        dispatch(getUserLogSuccess(userLogData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getUserLogFailure(errorMsg));
      });
  };
};

const expObj = {
  getUserLogRequest,
  getUserLogSuccess,
  getUserLogFailure,
  getUserLogData,
};
export default expObj;
