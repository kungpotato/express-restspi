var mongoose = require('mongoose')
var Schema = mongoose.Schema

var MasterMaterial = new Schema({
  material: { type: String },
  isChecked: { type: Boolean, default: false }
})

module.exports = mongoose.model('MasterMaterial', MasterMaterial)
