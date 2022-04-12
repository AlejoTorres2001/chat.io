import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Chat from "./components/Chat/Chat";
import LogInForm from "./components/LogInForm/LogInForm";
import SideBar from "./components/SideBar/SideBar";
import useIsLoggedIn from "./hooks/useIsLoggedIn";
import { useRecoilState } from "recoil";
import sessionState from "./atoms/sessionAtom";
const ENDPOINT = "http://localhost:3000";

function App() {
  const [response, setResponse] = useState({});
  const [session, setSession] = useRecoilState(sessionState);
  const [checkAuth] = useIsLoggedIn();
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("message", (data) => {
      setResponse(data);
    });
  }, []);

  useEffect(() => {
    if (session.token) {
      checkAuth().then((res) => {
        setIsLogged(res);
      });
    }
  }, [session]);

  return (
    <>
      {isLogged ? (
        <div className="grid grid-cols-[0.3fr,1fr]">
          <SideBar></SideBar>
          <Chat></Chat>
        </div>
      ) : (
        <LogInForm />
      )}
    </>
  );
}

export default App;
