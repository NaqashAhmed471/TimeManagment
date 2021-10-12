import axios from "axios";
import {
  CREATE_LOG_REQUEST,
  CREATE_LOG_SUCCESS,
  CREATE_LOG_FAILURE,
} from "./createWorkLogType";

const createLogRequest = () => {
  return {
    type: CREATE_LOG_REQUEST,
  };
};

const createLogSuccess = (userData) => {
  return {
    type: CREATE_LOG_SUCCESS,
    payload: userData,
  };
};

const createLogFailure = (error) => {
  return {
    type: CREATE_LOG_FAILURE,
    payload: error,
  };
};

const createWorkLogData = (userRecord) => {
  console.log("///////////", userRecord);
  let token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(createLogRequest);
    axios
      .post("http://34.210.129.167/api/work-logs",userRecord,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userData = response.data;
        console.log("...", userData);
        dispatch(createLogSuccess(userData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(createLogFailure(errorMsg));
      });
  };
};

const expObj = {
  createLogRequest,
  createLogSuccess,
  createLogFailure,
  createWorkLogData,
};
export default expObj;
