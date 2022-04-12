import axios from "axios";
import routes from "../endpoints";

const getMessageByid = async (id,token) => {
  const res = await axios.get(routes.messages.getMessage.replace(":id", id),{
    headers:{
      "x-access-token":token
    }
  });
  return res.data;
}
export default getMessageByid;