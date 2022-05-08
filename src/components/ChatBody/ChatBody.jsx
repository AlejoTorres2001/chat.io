import { useRecoilState } from 'recoil'
import selectedChatAtom from '../../atoms/selectedChatAtom';
import sessionState from '../../atoms/sessionAtom'
import { useEffect,useState } from 'react';
import getChatMessages from '../../functions/getChatMessages';
import SentMessage from '../SentMessage/SentMessage';
import ReceivedMessage from '../ReceivedMessage/ReceivedMessage';
const ChatBody = () => {
  const [session,setSession]= useRecoilState(sessionState)
  const [selectedChat, setselectedChat] = useRecoilState(selectedChatAtom);
  const [messages, setMessages] = useState([])
  useEffect(() => {
  if (selectedChat._id)getChatMessages(selectedChat._id).then(data=>{
    setMessages(data)
  })
  }, [selectedChat])
  if (selectedChat._id) {
    return (
      <div className='flex flex-col w-auto h-auto bg-red-400 border-l border-gray-selected overflow-y-scroll crollbar-thin scroll-smooth scrollbar '>
        {messages.map((message, index) =>{
          if (message.user === session.id) {
            return <SentMessage key={message._id} message={message}></SentMessage>
          }
          else{
            return <ReceivedMessage key={message._id} message={message}></ReceivedMessage>
          }
        })}
        </div>
    )
  }
  return <div className=""></div>;
}

export default ChatBody