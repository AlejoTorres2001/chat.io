import axios from "axios";
const ENDPOINT = "http://localhost:3000";
const getUsersChats = async (userId) => {
  return new Promise((resolve, reject) => {
    axios.get(ENDPOINT+'/chats/'+userId).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    })
  })
  
}
export default getUsersChats