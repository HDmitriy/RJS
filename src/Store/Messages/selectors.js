export const messageListSelector = (state) => state.messages;
export const chatMessagesSelector = (state, chatId) => state.messages.messageList[chatId];