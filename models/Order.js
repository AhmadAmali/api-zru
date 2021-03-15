const mongoose = require('mongoose');
const OrderSchema = mongoose.Schema({
    product_id: {
        type: Number,
        required: true
    },
    order_recepient: {
        type: String,
        required: true
    },
    listing_date: {
        type: Date,
        default: Date.now
    }


});
module.exports = mongoose.model('Order', OrderSchema);