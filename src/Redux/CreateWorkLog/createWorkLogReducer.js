import {
  CREATE_LOG_REQUEST,
  CREATE_LOG__SUCCESS,
  CREATE_LOG__FAILURE,
} from "./createWorkLogType";

const initialState = {
  loading: false,
  workLogUsersRecord: [],
  error: "",
};

const createWorkLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_LOG__SUCCESS:
      return {
        loading: false,
        workLogUsersRecord: action.payload,
        error: "",
      };
    case CREATE_LOG__FAILURE:
      return {
        loading: false,
        workLogUsersRecord: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default createWorkLogReducer;
