import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./signUpType";

const initialState = {
  loading: false,
  signup: [],
  error: "",
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        loading: false,
        signup: action.payload,
        error: "",
      };
    case SIGNUP_FAILURE:
      return {
        loading: false,
        signup: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default signUpReducer;
