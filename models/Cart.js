const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: 
        String,
    items: [{
        productId: String,
        name: String,
        quantity: {
            Number,
            required: true,
            min: [1, "Quantity can not be less than 1"],
            default: 1
        },
        price: Number
    }],
    bill: {
        Number,
        required: true,
        default: 0
    }
});

module.exports = Cart = mongoose.model("cart",CartSchema);