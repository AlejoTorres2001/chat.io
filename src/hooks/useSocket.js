
import { useContext } from "react";
import { SocketContext } from "../providers/SocketProvider";

export const useSocket = () => {
  const socket = useContext(SocketContext);

  return socket;
};