const 
mongoose = require('mongoose')
activitySchema = new mongoose.Schema({
    place: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    description: {type: String, default: 'No Description'},
    rating: Number,
    trip: {type: mongoose.Schema.Types.ObjectId, ref: 'Trip'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true})

module.exports = mongoose.model('Activity', activitySchema)