import axios from "axios";
import routes from "../endpoints";

const getMessageByid = async (id) => {
  const res = await axios.get(routes.messages.getMessage.replace(":id", id), {
    withCredentials: true,
  });
  return res.data;
};
export default getMessageByid;
