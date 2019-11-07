const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String,
    boards: [
        {
            type: Schema.Types.ObjectId,
            ref: "Boards"
        }
    ]
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
