import axios from "axios";
import routes from "../endpoints";
const getUsers = async () => {
  return new Promise((resolve,reject) => {
    axios
      .get(routes.users.getUsers, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  }) 
};
export default getUsers;