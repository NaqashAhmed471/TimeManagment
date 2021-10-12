import { POST_REQUEST, POST_SUCCESS, POST_FAILURE } from "./loginType";

const initialState = {
  loading: false,
  login: [],
  error: "",
  isLoggedIn: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_SUCCESS:
      return {
        loading: false,
        login: action.payload,
        error: "",
        isLoggedIn: true,
      };
    case POST_FAILURE:
      return {
        loading: false,
        login: [],
        error: action.payload,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
export default loginReducer;
