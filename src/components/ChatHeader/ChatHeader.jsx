import React from 'react'

const ChatHeader = () => {
  return (
    <div className='bg-gray-light h-[56px] min-w-[700px] whitespace-nowrap flex align-middle justify-center items-center'>
      
      <div className="ml-1">
        <img src="https://pps.whatsapp.net/v/t61.24694-24/157899877_3021327664799914_4032486813147854536_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=126b8ec4bd18d013b5e57f3a568ca096&oe=62540950" alt="" className="mr-auto m-2 w-[40px] h-[40px] rounded-full" />
      </div>
      <div className="flex flex-col justify-center ml-3">
        <p className='font-medium text-white-mssg'>Hola</p>
        <p className='text-sm text-gray-date'>Barba, Cru, Diego, Enzo, Fran, Fran, Goofy, Lauti, Lucas, Nachito, Tomas, Totaro, Tulio, Tú</p>
      </div>
      <div className="ml-auto mr-4 text-gray-icons flex justify-center align-middle my-1 mx-2 flex-shrink-0 rounded-full hover:bg-gray-selected hover:cursor-pointer h-[40px] w-[40px] items-center">
      <svg viewBox="0 0 24 24" width="30" height="40"><path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"></path></svg>
      </div>
      <div className=" mr-4 text-gray-icons flex justify-center align-middle my-1 mx-2 flex-shrink-0 rounded-full hover:bg-gray-selected hover:cursor-pointer h-[40px] w-[40px] items-center">
      <svg viewBox="0 0 24 24" width="30" height="40" class=""><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
      </div>
    </div>
  )
}

export default ChatHeader