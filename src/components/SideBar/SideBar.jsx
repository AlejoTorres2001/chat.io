import ChatList from "../ChatList/ChatList";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import SideBarSearchBar from "../SideBarSearchBar/SideBarSearchBar";

const SideBar = () => {
  return (
    <div className="bg-gray-dark flex flex-col w-auto h-screen min-w-[300px]">
      <SideBarHeader />
      <SideBarSearchBar />
      <ChatList />
    </div>
  );
};

export default SideBar;
