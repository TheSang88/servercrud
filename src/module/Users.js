import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define collection and schema for Business
let User = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model('User', User);