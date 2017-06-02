const mongoose = require('mongoose')



const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    default: 'soFly',
  }
})

var User = mongoose.model('User',UserSchema)

// var u = new User({
//   userName: 'zhao'
// })
//
// u.save(function(err){
//   if(err) console.log(err)
// })
module.exports = User
