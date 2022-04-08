
import axios from 'axios';
import {useState,useEffect} from 'react'
import ChatItem from '../ChatItem/ChatItem';
const userId='62489759e7cffb86b5ea0a86'
import getUsersChats from '../../functions/getUsersChats';
const ChatList = () => {
  const [chats, setChats] = useState([])

  useEffect(() => {
    getUsersChats(userId).then(chats => setChats(chats))
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