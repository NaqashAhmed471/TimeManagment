import {
  HOURS_REQUEST,
  HOURS_SUCCESS,
  HOURS_FAILURE,
} from "./updateWorkingHourType";

const initialState = {
  loading: false,
  workingHoursData: [],
  error: "",
};

const updateWorkingHoursReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOURS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HOURS_SUCCESS:
      return {
        loading: false,
        workingHoursData: action.payload,
        error: "",
      };
    case HOURS_FAILURE:
      return {
        loading: false,
        workingHoursData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default updateWorkingHoursReducer;