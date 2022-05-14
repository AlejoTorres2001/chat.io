import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import sessionState from "./atoms/sessionAtom";
import ChatBody from "./components/ChatBody/ChatBody";
import ChatContainer from "./components/ChatContainer/ChatContainer";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatInputBar from "./components/ChatInputBar/ChatInputBar";
import LogInForm from "./components/LogInForm/LogInForm";
import SideBar from "./components/SideBar/SideBar";
import validateSession from "./functions/validateSession";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionState.id);
  const [session, setSession] = useRecoilState(sessionState);
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
          <ChatContainer>
            <ChatHeader />
            <ChatBody />
            <ChatInputBar />
          </ChatContainer>
        </div>
      ) : (
        <LogInForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;
