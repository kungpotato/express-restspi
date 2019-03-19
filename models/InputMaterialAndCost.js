var mongoose = require('mongoose')
var Schema = mongoose.Schema

var InputMaterialAndCost = new Schema({
  periodCode: { type: String },
  department: { type: Schema.Types.ObjectId, ref: 'MasterDepartment' },
  dataInput: { type: Array },
  dataOutput: { type: Array },
  process: { type: Number }
},{
	timestamps: true
})

module.exports = mongoose.model('InputMaterialAndCost', InputMaterialAndCost)
