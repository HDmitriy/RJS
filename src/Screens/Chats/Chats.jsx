import { useParams } from "react-router-dom";


import { Chatlist } from "../../Components/ChatList";

export const Chats = ({ chatList }) => {
  const { chatId } = useParams();

  return (
    <div><Chatlist/></div>
  );

};