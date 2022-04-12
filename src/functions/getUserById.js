import axios from "axios";
import routes from "../endpoints";
const getUserById = async (id,token) => {
  const res = await axios.get(routes.users.getUser.replace(':id',id),{
    headers:{
      "x-access-token":token
    }
  });
  return res.data;
}
export default getUserById