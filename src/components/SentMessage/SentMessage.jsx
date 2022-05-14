import moment from "moment";

const SentMessage = ({ message }) => {
  const timeStamp = moment(message.createdAt).format("HH:mm");
  return (
    <div className="bg-green-message-sent text-white-message-text my-[10px] mx-[6px] p-[15px] pb-[26px] ml-auto  min-w-[60px] text-right relative  w-fit rounded-2xl">
      <p className="text-left">{message.message}</p>
      <span className="text-gray-timestamp p-[10px] text-sm absolute bottom-0 text-right right-0">
        {timeStamp}
      </span>
    </div>
  );
};

export default SentMessage;
