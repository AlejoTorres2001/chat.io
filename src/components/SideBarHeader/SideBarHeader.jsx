
import {MailIcon,DotsVerticalIcon,AtSymbolIcon,UserIcon} from '@heroicons/react/solid'

const SideBarHeader = () => {
  return (
    <div className="flex flex-row w-full align-middle justify-end text-gray-icons bg-gray-light ">
      <div className="flex grow  sm:mr-[100px]">
      <img src="https://pps.whatsapp.net/v/t61.24694-24/157899877_3021327664799914_4032486813147854536_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=126b8ec4bd18d013b5e57f3a568ca096&oe=62540950" alt="profil picture" className="mr-auto m-2 w-[40px] h-[40px] rounded-full"/>
      </div>
      <MailIcon  className="my-1 mx-2 w-[30px] h-[40px] flex-shrink-0"></MailIcon>
      <DotsVerticalIcon className="my-1 mx-2 w-[30px] h-[40px] flex-shrink-0"></DotsVerticalIcon>
      <AtSymbolIcon className="my-1 mx-2 w-[30px] h-[40px] flex-shrink-0"></AtSymbolIcon>
    </div>
  )
}

export default SideBarHeader