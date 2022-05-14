const ChatContainer = ({ children }) => {
  return (
    <div className="flex flex-col w-full bg-gray-darker border-l border-gray-selected overflow-hidden h-screen  ">
      {children}
    </div>
  );
};

export default ChatContainer;
