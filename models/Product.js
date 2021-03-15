const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    product_id: {
        type: Number,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        required: true
    },
    product_cost: {
        type: Number,
        required: true
    },
    listing_date: {
        type: Date,
        default: Date.now
    },


});
module.exports = mongoose.model('Product', ProductSchema);
