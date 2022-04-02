const Model = require('./model')

function add(user) {
    const newUser= new Model(user)
    return newUser.save()
}

module.exports={add}