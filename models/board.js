const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const Board = new Schema({
    boardName: String,
    cards: [
        {
            type: Schema.Types.ObjectId,
            ref: "card"
        }
    ]
});

// Board.plugin(passportLocalMongoose);

module.exports = mongoose.model('board', Board);
