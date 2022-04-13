import { useRecoilState } from 'recoil'
import sessionState from '../../atoms/sessionAtom'

const ChatContainer = () => {
  const [session,setSession]= useRecoilState(sessionState)
 
  return (
    <div className='flex w-auto bg-gray-darker border-l border-gray-selected'>

      Chat</div>
  )
}

export default ChatContainer