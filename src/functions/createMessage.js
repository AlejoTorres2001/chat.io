import axios from "axios";
import routes from "../endpoints";

const createMessage =async (chatId,userId, message) => {
  const res =await axios.post(routes.messages.createMessage, {
    message,
    chatId,
    fromUserId:userId
  },{withCredentials: true});
  return res.data;
}
export default createMessage;