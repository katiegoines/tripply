const 
mongoose = require('mongoose')
tripSchema = new mongoose.Schema({
    name: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    locale: {type: String, required: true},
    description: {type: String, default: 'Description not yet added'},
    photo: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 }, {timestamps: true})

module.exports = mongoose.model('Trip', tripSchema)