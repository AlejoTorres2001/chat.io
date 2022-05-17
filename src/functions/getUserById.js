import axios from "axios";
import routes from "../endpoints";
const getUserById = async (id) => {
  const res = await axios.get(routes.users.getUser.replace(":userId", id), {
    withCredentials: true,
  });
  return res.data;
};
export default getUserById;
