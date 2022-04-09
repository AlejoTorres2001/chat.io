import axios from "axios";
import routes from "../endpoints"; 
const updateUnreadMessages = (chatId) => {
  return new Promise((resolve, reject) => {
    axios.put(routes.chats.readMessages.replace(':id',chatId)).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    })
  })
  
}
export default updateUnreadMessages