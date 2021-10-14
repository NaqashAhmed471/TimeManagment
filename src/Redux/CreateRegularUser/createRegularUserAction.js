import axios from "axios";
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from "./createRegularUserType.js";

const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

const createUserSuccess = (userData) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: userData,
  };
};

const createUserFailure = (error) => {
  return {
    type: CREATE_USER_FAILURE,
    payload: error,
  };
};

const regularUserData = (createData) => {
  let token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(createUserRequest);
    axios
      .post("http://34.210.129.167/api/users", createData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userData = response.data;
        dispatch(createUserSuccess(userData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(createUserFailure(errorMsg));
      });
  };
};

const expObj = {
  createUserRequest,
  createUserSuccess,
  createUserFailure,
  regularUserData,
};
export default expObj
