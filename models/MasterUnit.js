const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MasterUnit = new Schema({
  unit: { type: String },
  isChecked: { type: Boolean, default: false }
})

module.exports = mongoose.model('MasterUnit', MasterUnit)
