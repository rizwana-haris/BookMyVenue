const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false
    },
    phone: {
        type: String,
        required: false,
        default: null
    },
    role: {
        type: String,
        enum: ['user','venue_owner','admin'],
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User',userSchema);