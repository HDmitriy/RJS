import { Redirect, useParams } from "react-router-dom";
import { ROUTES } from "../../Router/constants";

export const Chats = ({ chatList }) => {
  const { chatId } = useParams();

  if (!chatId || !chatList[chatId]) {
    return <Redirect to={ROUTES.NO_CHAT} />;
  }

  return <h1>Страница чата</h1>;
};