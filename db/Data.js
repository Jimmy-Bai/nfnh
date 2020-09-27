const { model } = require('mongoose');
const Mongoose = require('mongoose');

const DataSchema = new Mongoose.Schema({
    code: {type: String, required: true},
    result: {type: String, required: true}
});

const Data = Mongoose.model('data', DataSchema);

module.exports = Data;