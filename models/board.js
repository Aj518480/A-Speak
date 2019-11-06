const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Board = new Schema({
    boardName: String,
    image: String,
    name: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('boards', Board);
