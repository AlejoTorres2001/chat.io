import { useEffect, useState, createContext } from "react";
import { io } from "socket.io-client";
import routes from "../endpoints";

const webSocket = io(routes.URL);
const SOCKET_RECONNECTION_TIMEOUT = 5000;
export const SocketContext = createContext(webSocket);

export const SocketProvider = (props) => {
  const [ws, setWs] = useState(webSocket);

  useEffect(() => {
    const onClose = () => {
      setTimeout(() => {
        setWs(io(routes.URL));
      }, SOCKET_RECONNECTION_TIMEOUT);
    };

    ws.on("close", onClose);

    return () => {
      ws.off("close", onClose);
    };
  }, [ws, setWs]);

  return (
    <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>
  );
};
