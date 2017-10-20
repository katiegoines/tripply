const 
mongoose = require('mongoose')
reviewSchema = new mongoose.Schema({
body: {type: String, required: true},
title: {type: String, required: true},
user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
trip: {type: mongoose.Schema.Types.ObjectId, ref: 'Trip'},
}, {timestamps: true})

module.exports = mongoose.model('Review', reviewSchema)