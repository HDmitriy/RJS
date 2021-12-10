import { ADD_MESSAGE_ACTION } from "./constants";

export const addMessageAction = (payload) => ({
  type: ADD_MESSAGE_ACTION,
  payload,
});

export const addMessageWithThunk = (payload) => (dispatch, getState) => {
  dispatch(addMessageAction(payload));
  if (payload.message !== "BOT") {
    setTimeout(() => {
      dispatch(
        addMessageAction({
          chatId: payload.chatId,
          author: "BOT",
          message: "i am bot",
        })
      );
    }, 1500);
  }
};