import { ADD_CHAT_ACTION, REMOVE_CHAT_ACTION } from "./constants";

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
          { id: Date.now() + '-' + Math.round(Math.random() * 1E9), name: action.payload },
        ],
      }
    }
    case REMOVE_CHAT_ACTION: {
      return {
        ...state,
        chatList: state.chatList.filter((item) => item.id !== action.payload)
      };
    }
    default:
      return state;
  }
};