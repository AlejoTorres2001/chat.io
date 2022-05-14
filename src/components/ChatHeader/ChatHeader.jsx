import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import selectedChatAtom from "../../atoms/selectedChatAtom";
import resolveChatUsers from "../../functions/resolveChatUsers";

const ChatHeader = () => {
  const [chatUsers, setChatUsers] = useState([]);
  const [selectedChat, setselectedChat] = useRecoilState(selectedChatAtom);
  useEffect(() => {
    resolveChatUsers(selectedChat.users || []).then((users) => {
      setChatUsers(users);
    });
  }, [selectedChat]);

  if (selectedChat._id) {
    return (
      <div className="bg-gray-light h-[56px] min-w-[700px] whitespace-nowrap flex align-middle justify-center items-center">
        <div className="ml-1">
          <img
            src={selectedChat.image}
            alt=""
            className="mr-auto m-2 w-[40px] h-[40px] rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center ml-3">
        <p className="font-medium text-white-mssg">{selectedChat.name}</p>
          <p className="text-sm text-gray-date">
            {chatUsers.map((user) => user.username).join(", ")}
          </p>
        </div>
        <div className="ml-auto mr-4 text-gray-icons flex justify-center align-middle my-1 mx-2 flex-shrink-0 rounded-full hover:bg-gray-selected hover:cursor-pointer h-[40px] w-[40px] items-center">
          <svg viewBox="0 0 24 24" width="30" height="40">
            <path
              fill="currentColor"
              d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
            ></path>
          </svg>
        </div>
        <div className=" mr-4 text-gray-icons flex justify-center align-middle my-1 mx-2 flex-shrink-0 rounded-full hover:bg-gray-selected hover:cursor-pointer h-[40px] w-[40px] items-center">
          <svg viewBox="0 0 24 24" width="30" height="40" class="">
            <path
              fill="currentColor"
              d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }
  return <div className=""></div>;
};

export default ChatHeader;
