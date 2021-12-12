import { GET_CAT_REQUEST, GET_CAT_SUCCESS, GET_CAT_ERROR } from "./constants";

const initialState = {
  catUrl: undefined,
  loading: true,
  error: false,
};

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_CAT_SUCCESS: {
      return {
        ...state,
        loading: false,
        catUrl: action.payload,
      };
    }
    case GET_CAT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};