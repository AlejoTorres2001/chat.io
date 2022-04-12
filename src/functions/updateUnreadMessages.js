import axios from "axios";
import routes from "../endpoints"; 
const updateUnreadMessages = (chatId,token) => {
  return new Promise((resolve, reject) => {
    axios.put(routes.chats.readMessages.replace(':id',chatId),{
      headers:{
        "x-access-token":token
      }
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    })
  })
  
}
export default updateUnreadMessages