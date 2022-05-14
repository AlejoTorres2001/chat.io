import moment from "moment";

const ReceivedMessage = ({ message }) => {
  const timeStamp = moment(message.createdAt).format("HH:mm");
  return (
    <div className="bg-gray-message-received text-white-message-text my-[10px] mx-[6px] p-[15px] pb-[26px] mr-auto  min-w-[60px] text-right relative  w-fit rounded-2xl">
      <p className="text-right">{message.message}</p>
      <span className="text-gray-timestamp p-[10px] text-sm absolute bottom-0 text-right right-0">
        {timeStamp}
      </span>
    </div>
  );
};
export default ReceivedMessage;
