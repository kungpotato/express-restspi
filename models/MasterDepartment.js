var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MasterDepartment = new Schema({
    department: {type: String}
});

module.exports= mongoose.model('MasterDepartment', MasterDepartment);