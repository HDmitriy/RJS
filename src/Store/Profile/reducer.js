import { SAVE_CHECKBOX_STATUS_ACTION, CHANGE_USER_NAME_ACTION, TOGGLE_USER_NAME_ACTION } from "./constants";

const initialState = {
  viewCheckbox: true,
  showName: true,
  name: "Vasja",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CHECKBOX_STATUS_ACTION: {
      return {
        ...state,
        viewCheckbox: !state.viewCheckbox,
      };
    }
    case CHANGE_USER_NAME_ACTION: {
      return {
        ...state,
        name: action.payload.name,
      };
    }
    case TOGGLE_USER_NAME_ACTION: {
      return {
        ...state,
        showName: !state.showName,
      };
    }
    default:
      return state;
  }
};