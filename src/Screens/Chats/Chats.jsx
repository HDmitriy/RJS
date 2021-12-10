import { Redirect, useParams } from "react-router-dom";
import { ROUTES } from "../../Router/constants";

import { Chatlist } from "../../Components/ChatList";

export const Chats = ({ chatList }) => {
  const { chatId } = useParams();

  // if (!chatId || !chatList[chatId]) {
  //   return <Redirect to={ROUTES.NO_CHAT} />;
  // }

  return (
    <div><Chatlist/></div>
  );

};