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
    readMessages: url+'/chats/readmessages/:id',
  },
  messages:{
    createMessage: url+'/messages',
    deleteMessages: url+'/messages/delete/:id',
    getMessages: url+'/messages',
    getUsersMessages: url+'/messages/:userId',
    getMessage: url+'/messages/message/:id',
    getChatMessages: url+'/messages/chat/:chatId',
  },
  users:{
    createUser: url+'/users/register',
    updateUser: url+'/users/:id',
    updateUserImage: url+'/users/image/:id',
    deleteUser: url+'/users/delete/:id',
    getUsers: url+'/users',
    getUser: url+'/users/userInfo/:userId',
    login: url+'/users/login',
    logout: url+'/users/logout',
    register: url+'/users/register',
    validateSession: url+'/users/whoami',
    getUserInfo:url+'/users/userInfo/:id',
  }

}
export default routes