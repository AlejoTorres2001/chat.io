import axios from "axios"
import routes from "../endpoints"
const logIn = async (username,password)=>{
  try {
    const response = await  axios.post(routes.users.login,{username,password})
    return response
  } catch (error) {
    return error
  }
}
export default logIn