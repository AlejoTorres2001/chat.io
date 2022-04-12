import { useState, useEffect } from "react";
const userId = "62489759e7cffb86b5ea0a86";
import getUserById from "../../functions/getUserById";
import TimeAgo from "timeago-react";
import socketIOClient from "socket.io-client";
import routes from "../../endpoints";
import getMessageByid from "../../functions/getMessageById";
import updateUnreadMessages from "../../functions/updateUnreadMessages";
import { useRecoilState } from "recoil";
import sessionState from '../../atoms/sessionAtom';
const getOtherUser = (users, SessionUser) => {
  return users.filter((user) => user !== SessionUser)[0];
};
const ChatItem = ({ chat }) => {
  const [session, setSession] = useRecoilState(sessionState);
  const [chatName, setChatName] = useState("");
  const [chatImage, setChatImage] = useState("");
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [lastMessage, setLastMessage] = useState({});
  const resolveChatName = async (chat, userId) => {
    if (!chat.name) {
      const user = await getUserById(getOtherUser(chat.users, userId),session.token);
      setChatName(user.name);
      return;
    }
    setChatName(chat.name);
  };
  const resolveChatImage = async (chat, userId) => {
    if (!chat.image) {
      const user = await getUserById(getOtherUser(chat.users, userId),session.token);
      setChatImage(user.image);
      return;
    }
    setChatImage(chat.image);
  };
  const resolveLastMessage = async (chat) => {
    if (!chat.lastMessage) return;
    const message = await getMessageByid(chat.lastMessage,session.token);
    setLastMessage(message);
  };
  useEffect(() => {
    const socket = socketIOClient(routes.URL);
    setUnreadMessages(chat.unreadMessages);
    resolveChatName(chat, userId);
    resolveChatImage(chat, userId);
    resolveLastMessage(chat);
    socket.on("updatedChat", (data) => {
      if (chat._id !== data._id) return;
      resolveChatName(data, userId);
      resolveChatImage(data, userId);
    });
    socket.on("updatedChatLastMessage", (data) => {
      if (chat._id !== data._id) return;
      setUnreadMessages((prev) => prev + 1);
      getMessageByid(data.lastMessage,session.token).then((message) => {
        setLastMessage(message);
      });
    });
    socket.on("readMessages", (data) => {
      if (chat._id !== data._id) return;
      setUnreadMessages(0);
    });
    return () => socket.disconnect();
  }, []);
  const readMessages = () => updateUnreadMessages(chat._id,session.token);
  const hasUnreadMessages = () => {
    if (unreadMessages > 0) return "text-green-mssg";
    else return "text-gray-date";
  };
  return (
    <div
      onClick={readMessages}
      className="flex px-2 py-3 border-b border-gray-selected h-auto  align-middle hover:bg-gray-selected "
    >
      <img src={chatImage} alt="chat_img" className="rounded-full  w-11 h-11" />
      <div className="flex flex-col flex-auto w-full ml-4">
        <div className="flex">
          <p className="text-white-mssg">{chatName}</p>
        </div>
        <div className="flex ">
          <span
            className={`ml-auto mt-[-15px] mr-[5px] sm:mr-[5px] lg:mr-0 text-xs ${hasUnreadMessages()} `}
          >
            {lastMessage.createdAt && (
              <TimeAgo datetime={lastMessage.createdAt} locale="en" />
            )}
          </span>
        </div>
        <div className="flex align-middle text-gray-date whitespace-nowrap overflow-hidden text-ellipsis w-[230px] sm:w-[230px] lg:w-[350px] ">
          {lastMessage.message ? lastMessage.message : "start a conversation"}
          {unreadMessages > 0 && (
            <span className="m-1 w-5 h-5 inline-block rounded-[50%] ml-auto text-black text-sm bg-green-mssg text-center">
              {unreadMessages}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
