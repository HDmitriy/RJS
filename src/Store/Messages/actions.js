import { ADD_MESSAGE_ACTION } from "./constants";

export const addMessageAction = (payload) => ({
  type: ADD_MESSAGE_ACTION,
  payload,
});

export const addMessageWithThunk = (payload) => (dispatch, getState) => {
    setTimeout(() => {
      dispatch(
        addMessageAction({
          chatId: payload.chatId,
          author: "BOT",
          text: "i am bot",
        })
      );
    }, 2000);
};