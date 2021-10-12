import axios from "axios";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from "./getUserType.js";
const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

const getUserSuccess = (userData) => {
  return {
    type: GET_USER_SUCCESS,
    payload: userData,
  };
};

const getUserFailure = (error) => {
  return {
    type: GET_USER_FAILURE,
    payload: error,
  };
};

const getUserData = () => {
  let token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(getUserRequest);
    axios
      .get("http://34.210.129.167/api/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userData = response.data;
        console.log("...", userData);
        dispatch(getUserSuccess(userData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getUserFailure(errorMsg));
      });
  };
};

const expObj = {
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  getUserData,
};
export default expObj;
