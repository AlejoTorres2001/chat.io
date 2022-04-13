import { useEffect } from "react";
import ChatItem from "../ChatItem/ChatItem";
import getUsersChats from "../../functions/getUsersChats";
import socketIOClient from "socket.io-client";
import routes from "../../endpoints";
import { useRecoilState } from "recoil";
import sessionState from "../../atoms/sessionAtom";
import chatsState from "../../atoms/chatsAtom";

const ChatList = () => {
  const [chats, setChats] = useRecoilState(chatsState);
  const [session, setSession] = useRecoilState(sessionState);
  const addChat = (c) => setChats((prevC) => [...prevC, c]);
  const deleteChat = (c) =>
    setChats((prevC) => prevC.filter((chat) => chat._id !== c._id));

  useEffect(() => {
    getUsersChats(session.id).then((chats) => setChats(chats));
    const socket = socketIOClient(routes.URL);
    socket.on("newChat", addChat);
    socket.on("deletedChat", deleteChat);
    return () => socket.disconnect();
  }, []);
  return (
    <div className="flex flex-col h-full">
      {chats.map((chat) => {
        return <ChatItem key={chat._id} chat={chat} />;
      })}
    </div>
  );
};

export default ChatList;
