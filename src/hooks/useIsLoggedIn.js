import axios from "axios";
import routes from "../endpoints";
import { useRecoilState } from "recoil";
import sessionState from "../atoms/sessionAtom";
const useIsLoggedIn = () => {
  const[session,setSession] = useRecoilState(sessionState)
  const checkAuth =  async () => {
    try {
      const res = await axios.get(routes.users.isLoggedIn,{
            headers:{
              "x-access-token":session.token
            }
          })
      return res.data.auth
      
    } catch (error) {
      return false
    }
  }
  return [checkAuth]
}

export default useIsLoggedIn