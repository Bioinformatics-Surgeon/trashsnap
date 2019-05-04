const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TrashcanSchema = new Schema({
    image: {
        type: String,
        trim: true
    },
    position: {
        type: Array,
        trim: true
    },
    description: {
        type: String
    },
    needsCleaning: {
        type: Boolean
    }
});

const Trashcan = mongoose.model("Trashcan", TrashcanSchema);

module.exports = Trashcan;