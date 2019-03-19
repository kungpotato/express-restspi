var mongoose = require('mongoose')
var Schema = mongoose.Schema

var MasterDepartment = new Schema({
  department: { type: String },
  sort: { type: Number, default: 0},
  isChecked: { type: Boolean, default: false }
})

module.exports = mongoose.model('MasterDepartment', MasterDepartment)
