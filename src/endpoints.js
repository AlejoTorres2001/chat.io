const url= process.env.NODE_ENV === 'development' ? 'http://localhost:3000': ''
const routes =  {
  URL:url,
  chats:{
    getChats: url+'/chats',
    UsersChats: url+'/chats/:userId',
    getChat: url+'/chats/:id',
    createChat: url+'/chats',
    updateChatName: url+'/chats/:id',
    updateChatImage: url+'/chats/image/:id',
    deleteChat: url+'/chats/delete/:id',
  },
  messages:{
    createMessage: url+'/messages',
    deleteMessages: url+'/messages/delete/:id',
    getMessages: url+'/messages',
    getUsersMessages: url+'/messages/:userId',
    getMessage: url+'/messages/message/:id',
  },
  users:{
    createUser: url+'/users',
    updateUser: url+'/users/:id',
    updateUserImage: url+'/users/image/:id',
    deleteUser: url+'/users/delete/:id',
    getUsers: url+'/users',
    getUser: url+'/users/:id',
  }

}
export default routes