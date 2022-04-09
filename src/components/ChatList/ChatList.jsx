import {useState,useEffect} from 'react'
import ChatItem from '../ChatItem/ChatItem';
const userId='62489759e7cffb86b5ea0a86'
import getUsersChats from '../../functions/getUsersChats';
import socketIOClient from 'socket.io-client';
import routes from '../../endpoints';
const ChatList = () => {
  const [chats, setChats] = useState([])
  const addChat = (c) => setChats(prevC => [...prevC, c]);
  const deleteChat = (c) => setChats(prevC => prevC.filter(chat => chat._id !== c._id));

  useEffect(() => {
    getUsersChats(userId).then(chats => setChats(chats))
    const socket = socketIOClient(routes.URL);
    socket.on('newChat', addChat);
    socket.on('deletedChat', deleteChat);
    return () => {
      socket.off('deletedChat', deleteChat);
      socket.off('newChat', addChat);}
  }, [])
  return (
    <div className='flex flex-col h-full'>
    {chats.map(chat => {
      return (<ChatItem key={chat._id} chat={chat}/>)
    })}
    </div>
  )
}

export default ChatList