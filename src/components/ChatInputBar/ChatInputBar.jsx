import { useState } from "react";
import { useRecoilState } from "recoil";
import selectedChatAtom from "../../atoms/selectedChatAtom";
import sessionState from "../../atoms/sessionAtom";
import { EmojiHappyIcon, PaperClipIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/outline";
import createMessage from "../../functions/createMessage";
const ChatInputBar = () => {
  const [session, setSession] = useRecoilState(sessionState);
  const [selectedChat, setselectedChat] = useRecoilState(selectedChatAtom);
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createMessage(selectedChat._id, session.id, message);
    setMessage("");
  };
  if (selectedChat._id) {
    return (
      <div className="flex sticky mt-auto bg-gray-light">
        <div className="flex align-middle justify-center items-center m-3 space-x-5 ">
          <EmojiHappyIcon
            width={"30px"}
            height={"40px"}
            className="text-gray-icons "
          />
          <PaperClipIcon
            width={"30px"}
            height={"40px"}
            className="text-gray-icons hover: cursor-pointer"
          />
        </div>
        <form
          method="post"
          onSubmit={handleSubmit}
          className="flex justify-center my-3 mx-3 bg-gray-message-bar w-full h-[40px] rounded-md px-4 "
        >
          <input
            type="text"
            className="box-border w-full overflow-clip  rounded-md bg-gray-message-bar border-none outline-none placeholder-gray-placeholder text-ellipsis text-white-mssg"
            placeholder="Escribe un mensaje aquí"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </form>
        <div className="flex align-middle justify-center items-center m-3 space-x-5">
          <MicrophoneIcon
            width={"30px"}
            height={"40px"}
            className="text-gray-icons hover: cursor-pointer"
          />
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default ChatInputBar;
