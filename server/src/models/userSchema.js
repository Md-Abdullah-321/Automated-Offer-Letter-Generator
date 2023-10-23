const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        reequired: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    account_type: {
        type: String,
        default: 'user'
    }
}, { timestamps: true });

const User = mongoose.model("user", userSchema);

module.exports = User;

