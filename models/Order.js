const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: {
        String,
    },
    items: [{
        productId: {
            String,
        },
        name: String,
        quantity: {
            Number,
            required: true,
            min: [1, "Quantity can not be less than 1"]
        },
        price: Number
    }],
    bill: {
        Number,
        required: true
    },
    date_added: {
        Date,
        default: Date.now
    }
})

module.exports = Order = mongoose.model("order",OrderSchema);