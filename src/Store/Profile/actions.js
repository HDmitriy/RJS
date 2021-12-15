import { SAVE_CHECKBOX_STATUS_ACTION, CHANGE_USER_NAME_ACTION, TOGGLE_USER_NAME_ACTION } from "./constants";

export const saveCheckboxStateAction = () => ({
  type: SAVE_CHECKBOX_STATUS_ACTION,
});
export const changeUserNameAction = (payload) => ({
  type: CHANGE_USER_NAME_ACTION,
  payload,
});
export const toggleUserNameAction = () => ({
  type: TOGGLE_USER_NAME_ACTION,
});