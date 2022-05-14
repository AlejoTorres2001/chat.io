import { useState, useEffect, useCallback } from "react";
import getMessageByid from "../functions/getMessageById";
import getUserById from "../functions/getUserById";
import updateUnreadMessages from "../functions/updateUnreadMessages";
import { useSocket } from "./useSocket";

const useChat = (chat, userId) => {
  const socket = useSocket();

  const [chatName, setChatName] = useState("");
  const [chatImage, setChatImage] = useState("");
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [lastMessage, setLastMessage] = useState({});
  const getOtherUser = (users, SessionUser) => {
    return users.filter((user) => user !== SessionUser)[0];
  };
  const resolveChatName = async () => {
    if (!chat.name) {
      const user = await getUserById(getOtherUser(chat.users, userId));
      setChatName(user.name);
      return;
    }
    setChatName(chat.name);
  };

  const resolveChatImage = async () => {
    if (!chat.image) {
      const user = await getUserById(getOtherUser(chat.users, userId));
      setChatImage(user.image);
      return;
    }
    setChatImage(chat.image);
  };
  const resolveLastMessage = async () => {
    if (!chat.lastMessage) return;
    const message = await getMessageByid(chat.lastMessage);
    setLastMessage(message);
  };
  const updatedChat = useCallback((data) => {
    if (chat._id !== data._id) return;
    resolveChatName(data, userId);
    resolveChatImage(data, userId);
  }, []);
  const updatedChatLastMessage = useCallback((data) => {
    if (chat._id !== data._id) return;
    setUnreadMessages((prev) => prev + 1);
    getMessageByid(data.lastMessage).then((message) => {
      setLastMessage(message);
    });
  }, []);

  const readMessage = useCallback((data) => {
    if (chat._id !== data._id) return;
    setUnreadMessages(0);
  }, []);
  useEffect(() => {
    socket.on("updatedChat", updatedChat);
    socket.on("updatedChatLastMessage", updatedChatLastMessage);
    socket.on("readMessages", readMessage);
    resolveChatName();
    resolveChatImage();
    resolveLastMessage();
    setUnreadMessages(chat.unreadMessages);
    return () => {
      socket.off("updatedChat", updatedChat);
      socket.off("updatedChatLastMessage", updatedChatLastMessage);
      socket.off("readMessages", readMessage);
    };
  }, [
    socket,
    updatedChat,
    updatedChatLastMessage,
    readMessage,
    chat.unreadMessages,
  ]);

  const readMessages = () => updateUnreadMessages(chat._id);

  return [chatName, chatImage, unreadMessages, lastMessage, readMessages];
};

export default useChat;
