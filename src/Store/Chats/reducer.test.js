import { chatsReducer } from "./reducer"; 
import { removeChatAction} from "./actions"

describe("Reducer test", () => {
    test('chatlist test', () => {
      const expected = {chatList: []};
      const recieved = chatsReducer(undefined, removeChatAction());
        
      expect(recieved).toEqual(expected);
  })});
  