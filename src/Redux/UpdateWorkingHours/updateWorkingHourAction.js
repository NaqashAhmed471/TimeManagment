import axios from "axios";
import {
  HOURS_REQUEST,
  HOURS_SUCCESS,
  HOURS_FAILURE,
} from "./updateWorkingHourType";

const hoursRequest = () => {
  return {
    type: HOURS_REQUEST,
  };
};

const hoursSuccess = (hourData) => {
  return {
    type: HOURS_SUCCESS,
    payload: hourData,
  };
};

const hoursFailure = (error) => {
  return {
    type: HOURS_FAILURE,
    payload: error,
  };
};

const hoursData = (hours, userLogId) => {
  let token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(hoursRequest);
    axios
      .patch(
        `http://34.210.129.167/api/users/${userLogId}/preferred-working-hours`,
        {
          workingHours: hours,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const hourData = response.data;
        dispatch(hoursSuccess(hourData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(hoursFailure(errorMsg));
      });
  };
};

const exp = {
  hoursRequest,
  hoursSuccess,
  hoursFailure,
  hoursData,
};
export default exp;
