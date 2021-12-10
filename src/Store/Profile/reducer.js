import { SAVE_CHECKBOX_STATUS_ACTION } from "./constants";

const initialState = {
  viewCheckbox: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CHECKBOX_STATUS_ACTION: {
      return {
        ...state,
        viewCheckbox: !state.viewCheckbox,
      };
    }
    default:
      return state;
  }
};