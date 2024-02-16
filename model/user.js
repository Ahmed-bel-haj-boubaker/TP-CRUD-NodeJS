var mongoose = require('mongoose')

const Schema = mongoose.Schema;

const User = new Schema({
    name:String,
    email:String,
    cin:Number
});

module.exports = mongoose.model('userTwin',User);