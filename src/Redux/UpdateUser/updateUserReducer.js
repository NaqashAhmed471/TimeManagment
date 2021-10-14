import {
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
} from "./updateUserType";
const initialState = {
  loading: false,
  updateData: [],
  error: "",
};

const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SUCCESS:
      return {
        loading: false,
        updateData: action.payload,
        error: "",
      };
    case UPDATE_FAILURE:
      return {
        loading: false,
        updateData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default updateUserReducer;
