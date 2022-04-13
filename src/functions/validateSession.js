import axios from "axios";
import routes from "../endpoints";
const validateSession = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(routes.users.validateSession, { withCredentials: true })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export default validateSession;
