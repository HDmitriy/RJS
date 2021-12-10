import { ADD_CHAT_ACTION } from "./constants";

const initialState = {
  chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION: {
      return {
        ...state,
        chatList: [
          ...state.chatList,
          { id: "uniqueId", name: action.payload.name },
        ],
      };
    }
    default:
      return state;
  }
};