var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MasterMaterial = new Schema({
    material: {type: String}
});

module.exports= mongoose.model('MasterMaterial', MasterMaterial);