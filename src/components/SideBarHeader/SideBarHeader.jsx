
import {MailIcon,DotsVerticalIcon,AtSymbolIcon,UserIcon} from '@heroicons/react/solid'

const SideBarHeader = () => {
  return (
    <div className="flex flex-row w-full align-middle justify-end text-gray-icons bg-gray-light ">
      <div className="flex grow  sm:mr-[100px]">
      <img src="https://pps.whatsapp.net/v/t61.24694-24/157899877_3021327664799914_4032486813147854536_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=126b8ec4bd18d013b5e57f3a568ca096&oe=62540950" alt="profil picture" className="mr-auto m-2 w-[40px] h-[40px] rounded-full"/>
      </div>
      <div className="flex justify-center align-middle my-1 mx-2 flex-shrink-0 rounded-full hover:bg-gray-selected hover:cursor-pointer h-[40px] w-[40px] items-center">
      <svg version="1.1" id="ee51d023-7db6-4950-baf7-c34874b80976" x="0" y="0" viewBox="0 0 24 24" width="30" height="40" class=""><path fill="currentColor" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>
      </div>
      <div className="flex justify-center align-middle my-1 mx-2 flex-shrink-0 rounded-full hover:bg-gray-selected hover:cursor-pointer h-[40px] w-[40px] items-center">
      <svg viewBox="0 0 24 24" width="30" height="40" class=""><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
      </div>
      <div className="flex justify-center align-middle my-1 mx-2 flex-shrink-0 rounded-full hover:bg-gray-selected hover:cursor-pointer h-[40px] w-[40px] items-center">
      <svg viewBox="0 0 24 24" width="30" height="40" class=""><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
      </div>
    </div>
  )
}

export default SideBarHeader