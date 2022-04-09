import { useState, useEffect } from "react";
const userId = "62489759e7cffb86b5ea0a86";
import getUserById from "../../functions/getUserById";
import TimeAgo from "timeago-react";
import socketIOClient from "socket.io-client";
import routes from "../../endpoints";
import getMessageByid from "../../functions/getMessageById";
const getOtherUser = (users, SessionUser) => {
  return users.filter((user) => user !== SessionUser)[0];
};
const ChatItem = ({ chat }) => {
  const [chatName, setChatName] = useState("");
  const [chatImage, setChatImage] = useState("");
  const [lastMessage, setLastMessage] = useState({});
  const resolveChatName = async (chat, userId) => {
    if (!chat.name) {
      const user = await getUserById(getOtherUser(chat.users, userId));
      setChatName(user.name);
      return;
    }
    setChatName(chat.name);
  };
  const resolveChatImage = async (chat, userId) => {
    if (!chat.image) {
      const user = await getUserById(getOtherUser(chat.users, userId));
      setChatImage(user.image);
      return;
    }
    setChatImage(chat.image);
  };
  const resolveLastMessage = async (chat) => {
    if (!chat.lastMessage) return;
    const message = await getMessageByid(chat.lastMessage);
    setLastMessage(message);
  };
  useEffect(() => {
    const socket = socketIOClient(routes.URL);
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
      getMessageByid(data.lastMessage).then((message) => {
        setLastMessage(message);
      });
    });
    return () => socket.disconnect();
  }, []);
  return (
    <div className="flex px-2 py-3 border-b border-gray-selected h-auto  align-middle hover:bg-gray-selected ">
      <img src={chatImage} alt="chat_img" className="rounded-full  w-11 h-11" />
      <div className="flex flex-col flex-auto w-full ml-4">
        <div className="flex">
          <p className="text-white-mssg">{chatName}</p>
        </div>
        <div className="flex ">
        <span className="ml-auto mt-[-15px] mr-[5px] sm:mr-[5px] lg:mr-0 ">
            {lastMessage.createdAt && (
              <TimeAgo
                className="text-gray-date text-xs"
                datetime={lastMessage.createdAt}
                locale="en"
              />
            )}
          </span>
        </div>
        <div className="text-gray-date whitespace-nowrap overflow-hidden text-ellipsis w-[230px] sm:w-[230px] lg:w-[350px]">
          
           {lastMessage.message ? lastMessage.message : "start a conversation"} 
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
