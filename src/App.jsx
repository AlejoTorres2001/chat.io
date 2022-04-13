import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import socketIOClient from "socket.io-client";
import sessionState from "./atoms/sessionAtom";
import Chat from "./components/Chat/Chat";
import LogInForm from "./components/LogInForm/LogInForm";
import SideBar from "./components/SideBar/SideBar";
import routes from "./endpoints";
import validateSession from "./functions/validateSession";
function App() {
  const [session, setSession] = useRecoilState(sessionState);
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionState.id);
  const [response, setResponse] = useState({});
  const [session, setSession] = useRecoilState(sessionState);
  const [checkAuth] = useIsLoggedIn();
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const socket = socketIOClient(routes.URL);
    socket.on("message", (data) => {
      setResponse(data);
    });
  }, []);
  useEffect(() => {
    validateSession()
      .then((data) => {
        if (data.auth) {
          setSession(data.user);
          setIsLoggedIn(true);
          return;
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
      });
  }, []);
  return (
    <>
      {isLoggedIn ? (
        <div className="grid grid-cols-[0.3fr,1fr]">
          <SideBar></SideBar>
          <Chat></Chat>
        </div>
      ) : (
        <LogInForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
