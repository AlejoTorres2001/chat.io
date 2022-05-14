import getUsersChats from "../functions/getUsersChats";

const useChats = (chats, setChats, session) => {
  const addChat = (c) => setChats((prevC) => [...prevC, c]);
  const deleteChat = (c) =>
    setChats((prevC) => prevC.filter((chat) => chat._id !== c._id));
  const fetchChats = () =>
    getUsersChats(session.id).then((chats) => setChats(chats));
  return [addChat, deleteChat, fetchChats];
};
export default useChats;
