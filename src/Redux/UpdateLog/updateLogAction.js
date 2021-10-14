import axios from "axios";
import {
  UPDATELOG_REQUEST,
  UPDATELOG_SUCCESS,
  UPDATELOG_FAILURE,
} from "./updateLogType.js";

const updateLogRequest = () => {
  return {
    type: UPDATELOG_REQUEST,
  };
};

const updateLogSuccess = (updateLogData) => {
  return {
    type: UPDATELOG_SUCCESS,
    payload: updateLogData,
  };
};

const updateLogFailure = (error) => {
  return {
    type: UPDATELOG_FAILURE,
    payload: error,
  };
};

const updateLogData = (id, update) => {
  let token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(updateLogRequest);
    axios
      .put(`http://34.210.129.167/api/work-logs/${id}`, update, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const updateLogData = response.data;
        dispatch(updateLogSuccess(updateLogData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updateLogFailure(errorMsg));
      });
  };
};

const exp = {
  updateLogRequest,
  updateLogSuccess,
  updateLogFailure,
  updateLogData,
};
export default exp;
