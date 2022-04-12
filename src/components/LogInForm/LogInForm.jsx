import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import sessionState from "../../atoms/sessionAtom";
import routes from "../../endpoints";
import logIn from "../../functions/logIn";
import { useEffect } from "react";

const LogInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistration, setIsRegistration] = useState(false);
  const [session, setSession] = useRecoilState(sessionState);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    setErrors([]);
  }, [username, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await logIn(username, password);
    if (res?.data?.auth) {
      const session = {
        user: res.data.user,
        token: res.data.token,
      };
      setSession(session);
    }
    setErrors([...errors, "Invalid username or password"]);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(routes.users.createUser, {
        username,
        password,
      });
    } catch (error) {
      return setErrors([...errors, "User already exists"]);
    }

    alert("user created");
    setIsRegistration(false);
  };
  return (
    <div className="flex items-center  justify-center bg-gray-darker h-screen ">

      <div className="flex flex-col align-middle   bg-gray-dark w-1/2 h-1/2 rounded-md">
      {errors.length > 0 && (
        <div className="flex flex-col items-center bg-gray-selected text-red-600 rounded-md">
          {errors.map((error, index) => {
            return <p key={index}>{error}</p>;
          })}
        </div>
      )}
        <div className="  mx-4 flex flex-col align-middle justify-center mt-[20%] lg:mt-24 ">
          <h2 className="-mb-8 lg:-mb-7 text-white-mssg">Username</h2>
          <input
            type="text"
            className="w-full h-8 bg-gray-light my-8 text-white-mssg rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h2 className="-mb-8 lg:-mb-7 text-white-mssg">Password</h2>
          <input
            type="password"
            className="w-full h-8 bg-gray-light my-8 text-white-mssg rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isRegistration ? (
            <button
              className="w-full h-8 bg-green-mssg my-4 text-white-mssg  rounded-md"
              onClick={handleRegister}
            >
              Register
            </button>
          ) : (
            <button
              className="w-full h-8 bg-green-mssg my-4 text-white-mssg  rounded-md"
              onClick={handleLogin}
            >
              Log In
            </button>
          )}
        </div>
        <div className="flex mt-14 justify-center items-center whitespace-nowrap text-sm lg:text-base">
          {isRegistration ? (
            <p className="text-white-mssg">
              Already have an account?{" "}
              <span
                className="underline font-medium hover: cursor-pointer"
                onClick={() => setIsRegistration(false)}
              >
                Log In
              </span>
            </p>
          ) : (
            <p className="text-white-mssg">
              New around here?{" "}
              <span
                className="underline font-medium hover: cursor-pointer"
                onClick={() => setIsRegistration(true)}
              >
                Create an Account
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
