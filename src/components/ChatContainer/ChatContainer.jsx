import { useRecoilState } from 'recoil'
import sessionState from '../../atoms/sessionAtom'

const ChatContainer = ({children}) => {
  const [session,setSession]= useRecoilState(sessionState)
 
  return (
    <div className='flex flex-col w-full bg-gray-darker border-l border-gray-selected overflow-hidden '>
        {children}
      </div>
  )
}

export default ChatContainer