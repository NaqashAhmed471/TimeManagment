import axios from "axios";
import {
  CREATE_LOG_REQUEST,
  CREATE_LOG__SUCCESS,
  CREATE_LOG__FAILURE,
} from "./createWorkLogType";

const createLogRequest = () => {
  return {
    type: CREATE_LOG_REQUEST,
  };
};

const createLogSuccess = (userData) => {
  return {
    type: CREATE_LOG__SUCCESS,
    payload: userData,
  };
};

const createLogFailure = (error) => {
  return {
    type: CREATE_LOG__FAILURE,
    payload: error,
  };
};

const createWorkLogData = (userRecord) => {
  console.log("///////////", userRecord);
  return (dispatch) => {
    dispatch(createLogRequest);
    axios
      .post("http://34.210.129.167/api/work-logs", userRecord, {
        headers: {
          "Content-Type": "application/json",
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

export default {
  createLogRequest,
  createLogSuccess,
  createLogFailure,
  createWorkLogData,
};
