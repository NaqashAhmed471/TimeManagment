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

const postData = (login, history) => {
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
        const role = loginData.user.roles[0].name;
        dispatch(postSuccess(loginData));
        localStorage.setItem("token", token);
        if (role === "admin") {
          history.push("/admindashboard");
        } else if(role === "manager") {
          history.push("/managerdashboard");
        }
        else if (role === "user"){
          history.push("/userdashboard");
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postFailure(errorMsg));
      });
  };
};

const exp = {
  postRequest,
  postSuccess,
  postFailure,
  postData,
};
export default exp;
