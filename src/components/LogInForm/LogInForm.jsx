import {useState} from 'react'
import logIn from '../../functions/logIn';
import sessionState from '../../atoms/sessionAtom';
import { useRecoilState } from 'recoil';

const LogInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [session,setSession] = useRecoilState(sessionState);
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await logIn(username, password);
    if(response?.data?.auth)setSession(response?.data?.user)
}
  return (
    <div className="flex items-center  justify-center bg-gray-darker h-screen ">
          <div className="flex flex-col align-middle   bg-gray-dark w-1/2 h-1/2 rounded-md">
            <div className="  mx-4 flex flex-col align-middle justify-center mt-[20%] lg:mt-24 ">
            <h2 className='-mb-8 lg:-mb-7 text-white-mssg'>Username</h2>
            <input type="text" className='w-full h-8 bg-gray-light my-8 text-white-mssg rounded-md' value={username} onChange={(e)=>setUsername(e.target.value)} />
            <h2 className='-mb-8 lg:-mb-7 text-white-mssg'>Password</h2>
            <input type="password" className='w-full h-8 bg-gray-light my-8 text-white-mssg rounded-md' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button className='w-full h-8 bg-green-mssg my-4 text-white-mssg  rounded-md' onClick={handleLogin}>Log In</button>
            </div>
            <div className="flex mt-14 justify-center items-center whitespace-nowrap text-sm lg:text-base">
            <p className='text-white-mssg'>New around here? <span className='underline font-medium hover: cursor-pointer'>Create an Account</span></p>
            </div>
            
        
            
          </div>
        </div>
  )
}

export default LogInForm