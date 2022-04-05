import { useState,useEffect } from 'react'

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";

function App() {
  const [response, setResponse] = useState({});
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("message", data => {
      setResponse(data);
    });
  }, []);
  
  return (
    <div>
      <h1>Sale el mensaje:</h1>
      <h1>{response.message}</h1>
    </div>
  )
}

export default App
