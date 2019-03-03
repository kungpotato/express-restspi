var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MasterUnit = new Schema({
    unit: {type: String}
});

module.exports= mongoose.model('MasterUnit', MasterUnit);