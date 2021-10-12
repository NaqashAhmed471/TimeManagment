import axios from "axios";
import {
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "./deleteUserType.js";

const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

const deleteUserSuccess = (userData) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: userData,
  };
};

const deleteUserFailure = (error) => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error,
  };
};

const deleteUser = () => {
  let token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(deleteUserRequest);
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
        dispatch(deleteUserSuccess(userData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deleteUserFailure(errorMsg));
      });
  };
};

const expObj = {
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
  deleteUser,
};
export default expObj;
