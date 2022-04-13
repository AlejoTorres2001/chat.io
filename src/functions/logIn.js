import axios from "axios";
import routes from "../endpoints";
axios.defaults.withCredentials = true;
const logIn = async(username, password) => {
  try {
    const response = await axios.post(routes.users.login, {
      username,
      password
    },{
      withCredentials: true
    })
    return response;
    
  } catch (error) {
    return error;
    
  }
}
export default logIn;
