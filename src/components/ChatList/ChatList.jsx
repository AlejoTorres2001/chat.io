import { useEffect } from "react";
import ChatItem from "../ChatItem/ChatItem";
import { useRecoilState } from "recoil";
import sessionState from "../../atoms/sessionAtom";
import chatsState from "../../atoms/chatsAtom";
import useChats from "../../hooks/useChats";
import {useSocket} from "../../hooks/useSocket";
const ChatList = () => {
  const [chats, setChats] = useRecoilState(chatsState);
  const [session, setSession] = useRecoilState(sessionState);
  const [addChat,deleteChat,fetchChats] = useChats(chats,setChats,session);
  const socket= useSocket()
  useEffect(() => {
    fetchChats();
    socket.on("newChat", addChat);
    socket.on("deletedChat", deleteChat);
    return () => {
      socket.off("newChat", addChat);
      socket.off("deletedChat", deleteChat);
    }
  }, [socket]);
  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-thumb-gray-scrollbar scrollbar-track-gray scrollbar-thin scroll-smooth">
      {chats.map((chat) => {
        return <ChatItem key={chat._id} chat={chat} />;
      })}
    </div>
  );
};

export default ChatList;
