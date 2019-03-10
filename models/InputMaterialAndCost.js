var mongoose = require('mongoose')
var Schema = mongoose.Schema

var InputMaterialAndCost = new Schema({
  periodCode: { type: String },
  department: { type: String },
  dataTable: { type: Array }
})

module.exports = mongoose.model('InputMaterialAndCost', InputMaterialAndCost)
