import axios from "axios"
import routes from "../endpoints"

const resolveChatUsers = (users)=>{
  const responses=users.map(async(user)=>{
    const res = await axios.get(routes.users.getUserInfo.replace(":id",user),{withCredentials:true})
    return  res.data 
  })
  return Promise.all(responses)

}
export default resolveChatUsers