import axios from "axios";
import routes from "../endpoints";

const singUp = async (username,password) =>{
  try {
    const response = await axios.post(routes.users.register,{
    username: username,
          password: password
      },{withCredentials: true});
    if(response?.status === 201){
      return {data:response.data,correct:true};
    }
  } catch (error) {
    return {error:"Username already exists"};
  }
}
export default singUp;