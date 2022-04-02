const store = require('./store');

function addUser(name) {
  if(!name){
    return Promise.reject('name is required')
  }
    const user = {
        name,
    }
    return store.add(user);
}


module.exports={
  addUser
}