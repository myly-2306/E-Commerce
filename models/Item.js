const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        String,
        required: true
    },
    description: {
        String,
        required: true
    },
    category: {
        String,
        required: true
    },
    price: {
        Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
});

const Item = mongoose.model("item",ItemSchema);
module.exports = Item;