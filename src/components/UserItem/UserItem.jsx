import React from "react";
import { useRecoilState } from "recoil";
import isNewChatState from "../../atoms/isNewChat";
import sessionState from "../../atoms/sessionAtom";
import createChat from "../../functions/createChat";

const UserItem = ({ user }) => {
  const [session, setSession] = useRecoilState(sessionState);
  const [isNewChat, setIsNewChat] = useRecoilState(isNewChatState);

  const createNewChatWithUser = () => {
    createChat([session.id, user._id]);
    setIsNewChat(false);
  };
  return (
    <div
      onClick={createNewChatWithUser}
      className="flex px-2 py-3 border-b border-gray-selected h-auto  align-middle hover:bg-gray-selected "
    >
      <img
        src={user?.image}
        alt="chat_img"
        className="rounded-full  w-11 h-11"
      />
      <div className="flex flex-col flex-auto w-full ml-4">
        <div className="flex">
          <p className="text-white-mssg">{user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
