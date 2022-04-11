import { useState,useEffect } from 'react'
import socketIOClient from "socket.io-client";
import Chat from './components/Chat/Chat';
import LogInForm from './components/LogInForm/LogInForm';
import SideBar from './components/SideBar/SideBar';
const ENDPOINT = "http://localhost:3000";
const isLoggedIn = false
function App() {
  const [response, setResponse] = useState({});
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("message", data => {
      setResponse(data);
    });
  }, []);
  console.log(response)
  return (
    <>
    {isLoggedIn ? (
      <div className='grid grid-cols-[0.3fr,1fr]'>
      <SideBar></SideBar>
      <Chat></Chat>
    </div>
    ) :(
        <LogInForm/>
    )} 
    </>
    
  )
}

export default App
