var mongoose = require('mongoose')
// bcrypt = require('bcrypt'),
var Schema = mongoose.Schema

var MasterUser = new Schema({
  username: { type: String, required: true, useCreateIndex: true },
  password: { type: String, required: true }
},{
	timestamps: true
})

MasterUser.methods.verifyPassword = function (password) {
  if (password === this.password) {
    return true
  }
  return false
  // callback(bcrypt.compareSync(password, this.password));
}

module.exports = mongoose.model('MasterUser', MasterUser)
