import { useRecoilState } from "recoil";
import selectedChatAtom from "../../atoms/selectedChatAtom";
import sessionState from "../../atoms/sessionAtom";
import { useEffect, useState } from "react";
import getChatMessages from "../../functions/getChatMessages";
import SentMessage from "../SentMessage/SentMessage";
import ReceivedMessage from "../ReceivedMessage/ReceivedMessage";
import { useSocket } from "../../hooks/useSocket";
const ChatBody = () => {
  const [session, setSession] = useRecoilState(sessionState);
  const [selectedChat, setselectedChat] = useRecoilState(selectedChatAtom);
  const [messages, setMessages] = useState([]);
  const socket = useSocket();
  const fetchMessages = (mode = "initial", message = {}) => {
    if (mode === "initial") {
      if (selectedChat._id)
        getChatMessages(selectedChat._id).then((data) => {
          setMessages(data);
        });
      return;
    }
    if (selectedChat.id === message.chatId) {
      if (selectedChat._id)
        getChatMessages(selectedChat._id).then((data) => {
          setMessages(data);
        });
    }
  };
  useEffect(() => {
    socket.on("newMessage", (message) => fetchMessages("update", message));
    fetchMessages();
    return () => {
      socket.off("newMessage");
    };
  }, [selectedChat]);
  if (selectedChat._id) {
    return (
      <div className="flex flex-col w-auto h-auto bg-red-400 border-l border-gray-selected overflow-y-scroll crollbar-thin scroll-smooth scrollbar ">
        {messages.map((message, index) => {
          if (message.user === session.id) {
            return <SentMessage key={message._id} message={message} />;
          }
          return <ReceivedMessage key={message._id} message={message} />;
        })}
      </div>
    );
  }
  return <div className=""></div>;
};

export default ChatBody;
