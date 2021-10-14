import axios from "axios";
import {
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
} from "./updateUserType";

const updateUserRequest = () => {
  return {
    type: UPDATE_REQUEST,
  };
};

const updateUserSuccess = (signUpData) => {
  return {
    type: UPDATE_SUCCESS,
    payload: signUpData,
  };
};

const updateUserFailure = (error) => {
  return {
    type: UPDATE_FAILURE,
    payload: error,
  };
};

const updateUserData = (id, update) => {
  let token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(updateUserRequest);
    axios
      .put(`http://34.210.129.167/api/users/${id}`, update, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const signUpData = response.data;
        dispatch(updateUserSuccess(signUpData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updateUserFailure(errorMsg));
      });
  };
};

const exp = {
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  updateUserData,
};
export default exp;
