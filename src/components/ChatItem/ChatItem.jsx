import { useState, useEffect } from "react";
const userId = "62489759e7cffb86b5ea0a86";
import getUserById from "../../functions/getUserById";
import TimeAgo from "timeago-react";
const getOtherUser = (users, SessionUser) => {
  return users.filter((user) => user !== SessionUser)[0];
};
const ChatItem = ({ chat }) => {
  const [chatName, setChatName] = useState("");
  const [chatImage, setChatImage] = useState("");
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
  useEffect(() => {
    resolveChatName();
    resolveChatImage();
  }, []);
  return (
    <div className="flex mx-2 my-3 border-b border-gray-selected h-auto align-middle">
      <img
        src={chatImage}
        alt="chat_img"
        className="rounded-full  w-11 h-11"
      />
      <div className="flex flex-col  flex-auto w-full mx-4">
        <div className=" flex">
          <p className="text-white-mssg">{chatName}</p>
          <span className="ml-auto">
            <TimeAgo
              className="text-gray-date text-sm md:text-xs"
              datetime={chat.createdAt} //!Should be repalced with las message date
              locale="en"
            />
          </span>
        </div>
        <p className="text-gray-date">Last message</p>
      </div>
    </div>
  );
};

export default ChatItem;
