const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const Card = new Schema({
    cards: []
    
});

// Board.plugin(passportLocalMongoose);

module.exports = mongoose.model('cards', Card);
