const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    _id: {
        type: String, 
        default: mongoose.Types.ObjectId
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    product_id: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('User', UserSchema);
