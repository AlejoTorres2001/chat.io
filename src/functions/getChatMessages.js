import axios from "axios";
import routes from "../endpoints";

const getChatMessages = async (chatId) => {
  const res = await axios.get(routes.messages.getChatMessages.replace(":chatId", chatId), {
    withCredentials: true,
  });
  return res.data;
};
export default getChatMessages;
