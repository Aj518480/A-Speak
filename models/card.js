const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    title: String,
    image: String
    
});

const Card = mongoose.model("card", cardSchema);

module.exports = Card;