import axios from "axios";
import { POST_REQUEST, POST_SUCCESS, POST_FAILURE } from "./loginType";

const postRequest = () => {
  return {
    type: POST_REQUEST,
  };
};

const postSuccess = (loginData) => {
  return {
    type: POST_SUCCESS,
    payload: loginData,
  };
};

const postFailure = (error) => {
  return {
    type: POST_FAILURE,
    payload: error,
  };
};

const postData = (login) => {
  return (dispatch) => {
    dispatch(postRequest);
    axios
      .post("http://34.210.129.167/api/login", login, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const loginData = response.data;
        let token = loginData.token;
        console.log("...", loginData);
        console.log("///", loginData.token);
        dispatch(postSuccess(loginData));
        localStorage.setItem("token", token);
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postFailure(errorMsg));
      });
  };
};

export default {
  postRequest,
  postSuccess,
  postFailure,
  postData,
};
