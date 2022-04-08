import axios from "axios";
const getUserById = async (id) => {
  const res = await axios.get(`http://localhost:3000/users/${id}`);
  return res.data;
}
export default getUserById