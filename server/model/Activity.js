const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const activitySchema = new Schema({
    description: String,
    type: String,
    participants: Number,
    accessibility: Number,
    price: Number,
    link: String,
    image: String,
    createdAt: Date,
});
const Activity = model('Activity', activitySchema);

module.exports = Activity
;