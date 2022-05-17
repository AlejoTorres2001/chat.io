import ChatList from "../ChatList/ChatList";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import SideBarSearchBar from "../SideBarSearchBar/SideBarSearchBar";
import UserList from "../UserList/UserList";
import { useRecoilState } from "recoil";
import isNewChatState from "../../atoms/isNewChat";
const SideBar = () => {
  const [isNewChat, setIsNewChat] = useRecoilState(isNewChatState);

  return (
    <div className="bg-gray-dark flex flex-col w-auto h-screen min-w-[300px]">
      <SideBarHeader />
      <SideBarSearchBar />

      {isNewChat ? <UserList /> : <ChatList />}
    </div>
  );
};

export default SideBar;
