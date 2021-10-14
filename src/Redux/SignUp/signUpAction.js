import axios from "axios";
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./signUpType";

const signUpRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

const signUpSuccess = (signUpData) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: signUpData,
  };
};

const signUpFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};

const signUpData = (signUp) => {
  return (dispatch) => {
    dispatch(signUpRequest);
    axios
      .post("http://34.210.129.167/api/register", signUp, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const signUpData = response.data;
        dispatch(signUpSuccess(signUpData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(signUpFailure(errorMsg));
      });
  };
};

const exp = {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  signUpData,
};
export default exp;
