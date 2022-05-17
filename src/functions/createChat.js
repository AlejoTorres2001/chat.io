import axios from "axios";
import routes from "../endpoints";
import getUserById from "./getUserById";

const createChat = async (usersIds) => {
  const names = await Promise.all(
    usersIds.map(async (id) => {
      const user = await getUserById(id);
      return user.username;
    })
  );
  const res = await axios.post(
    routes.chats.createChat,
    {
      users: usersIds,
      name: names.join(", "),
    },
    { withCredentials: true }
  );
  return res.data;
};
export default createChat;
