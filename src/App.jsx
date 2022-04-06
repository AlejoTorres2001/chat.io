import { useState,useEffect } from 'react'
import './main.css'
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
  console.log(response)
  return (
    <div>
      <h1 className='bg-red-300'>Sale el mensaje:</h1>
      <h1>{response.message}</h1>
      <h2>{response.user}</h2>
      <h3>{response._id}</h3>
      <p>{response.createdAt}</p>
    </div>
  )
}

export default App
