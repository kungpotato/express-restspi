const mongoose = require('mongoose')
// bcrypt = require('bcrypt')
const { Schema } = mongoose

var MasterUser = new Schema({
  username: { type: String, required: true, useCreateIndex: true },
  password: { type: String, required: true }
})

MasterUser.methods.verifyPassword = (password) => {
  if (password === this.password) { return true }
  return false
  // callback(bcrypt.compareSync(password, this.password));
}

module.exports = mongoose.model('MasterUser', MasterUser)
