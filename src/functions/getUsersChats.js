import axios from "axios";
import routes from "../endpoints";
const getUsersChats = async (userId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(routes.chats.UsersChats.replace(":userId", userId), {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export default getUsersChats;
