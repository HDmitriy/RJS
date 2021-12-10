import { ADD_MESSAGE_ACTION } from "./constants";

// const initialState = {
//   messageList: {
//     id1: {
//       author: 'Petya',
//       text: 'wto?'
//     }
//   },
// };

const initialState = {
  messageList: {
    id1: [
      {
        author: 'Petya',
        text: 'wto?'
      },
    ]
  },
};

export const messagesReducer = (state = initialState, action) => {
  console.log('initialState', initialState);
  console.log('REDUCER MESSAGE');
  console.log('action.payload', action.payload);
  switch (action.type) {
    case ADD_MESSAGE_ACTION: {

      const { chatId, ...chatValue } = action.payload;
      if (!state.messageList[chatId]) state.messageList[chatId] = [];
      state.messageList[chatId].push(chatValue);

      // const { chatId, ...rest } = action.payload;

      // const chatMessages = state.messageList[chatId] ?? [];
      // return {
      //   ...state,
      //   messageList: {
      //     ...state.messageList,
      //     [chatId]: [...chatMessages, { id: "", ...rest }],
      //   },
      // };
      console.log('state', state);
      return state;
    }
    default:
      return state;
  }
};