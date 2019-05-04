const mongoose = require("mongoose");
const db = require('../models');
mongoose.Promise = global.Promise;


const trash = [
    {
        image: "",
        position: [33.753, -84.386],
        description: "look at all this trash that needs cleaning!",
        needsCleaning: true
    },
    {
        image: "",
        position: [38.978, -76.492],
        description: "Now that's a yuck yuck 9000.",
        needsCleaning: true
    },
    {
        image: "",
        position: [33.749, 84.388],
        description: "We could even clean up trash in the ocean.",
        needsCleaning: true
    }
]

db.Trashcan.deleteMany({})
    .then(() => db.Trashcan.collection.insertMany(trash))
    .then(data => {
        console.log(data.insertedCount + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });