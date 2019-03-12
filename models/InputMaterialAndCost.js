var mongoose = require('mongoose')
var Schema = mongoose.Schema

var InputMaterialAndCost = new Schema({
  periodCode: { type: String },
  department: { type: String },
  dataInput: { type: Array },
  dataOutput: { type: Array }
},{
	timestamps: true
})

module.exports = mongoose.model('InputMaterialAndCost', InputMaterialAndCost)
