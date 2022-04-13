import TimeAgo from "timeago-react";
import { useRecoilState } from "recoil";
import sessionState from "../../atoms/sessionAtom";
import useChat from "../../hooks/useChat";

const ChatItem = ({ chat }) => {
  const [session, setSession] = useRecoilState(sessionState);
  const [chatName, chatImage, unreadMessages, lastMessage, readMessages] =
    useChat(chat, session.id);

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
            className={`ml-auto mt-[-15px] mr-[9px] sm:mr-[9px] lg:mr-8px text-xs ${hasUnreadMessages()} `}
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
