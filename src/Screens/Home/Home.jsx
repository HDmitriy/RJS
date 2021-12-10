
import { MessageList } from "../../Components/MessageList";
import { Message } from "../../Components/Message/Message";

import "./Home.css";
import { Chatlist } from "../../Components/ChatList";

export const Home = () => {
  const homework = "homework";




  return (
    <div className="App">
      
      <Message homework={homework} />
      {/* <Chatlist/> */}

        {/* <MessageList /> */}
        
    </div>
  );
};