import { ADD_MESSAGE_ACTION } from "./constants";

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION: {
      const { chatId, ...chatValue } = action.payload;
      if (!state.messageList[chatId]) state.messageList[chatId] = [];
      state.messageList[chatId].push(chatValue);
      return {
        ...state,
      }
    }
    default:
      return state;
  }
};