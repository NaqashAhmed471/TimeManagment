import {
  UPDATELOG_REQUEST,
  UPDATELOG_SUCCESS,
  UPDATELOG_FAILURE,
} from "./updateLogType.js";

const initialState = {
  loading: false,
  updateLogData: [],
  error: "",
};

const updateLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATELOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATELOG_SUCCESS:
      return {
        loading: false,
        updateLogData: action.payload,
        error: "",
      };
    case UPDATELOG_FAILURE:
      return {
        loading: false,
        updateLogData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default updateLogReducer;
