import React from 'react'
import { useRecoilState } from 'recoil'
import selectedChatAtom from '../../atoms/selectedChatAtom'
import sessionState from '../../atoms/sessionAtom'
import { EmojiHappyIcon, PaperClipIcon } from '@heroicons/react/outline'
const ChatInputBar = () => {
  const [session,setSession]= useRecoilState(sessionState)
  const [selectedChat, setselectedChat] = useRecoilState(selectedChatAtom);
  if (selectedChat._id) {
    return (
    <div className='flex sticky mt-auto bg-gray-light'>
      <EmojiHappyIcon width={'2rem'} height={'2rem'} className="text-gray-icons"></EmojiHappyIcon>
      <PaperClipIcon width={'2rem'} height={'2rem'} className="text-gray-icons"></PaperClipIcon>
    </div>
    )
  }
  return <div></div>
}

export default ChatInputBar