const
    express = require('express'),
    passport = require('passport'),
    tripsRouter = new express.Router(),
    Trip = require('../models/Trip.js'),
    Activity = require('../models/Activity.js')

tripsRouter.route('/')
    .get((req, res) => {
        Trip.find({}, (err, trips) => {
            res.json(trips)
            // res.render('../views/trips/all-trips', {trips:trips })
        })
    })

tripsRouter.route('/:id')
    .get((req, res) => {
        Trip.findById(req.params.id, (err, trip) => {
            Activity.find({trip: req.params.id}, (err, activities) => {
                res.render('../views/trips/trip', {trip:trip, activities: activities})
            })
            //res.json(trip)
        })
    })

    .patch((req, res) => {
        Trip.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTrip) => {
            res.json(updatedTrip)
        })
    })

    .delete((req, res) => {
        Trip.findByIdAndRemove(req.params.id, (err, deletedTrip) => {
            res.json({success: true, message: `${deletedTrip.name} has been deleted.`})
        })
    })

tripsRouter.route('/:id/activity')
    .get((req, res) => {
        Trip.findById(req.params.id, (err, trip) => {
            //res.json(trip)
            res.render('../views/trips/trip', {trip:trip})
        })
    })
    .post((req, res) => {
        var newActivity = new Activity(req.body)
        newActivity.trip = req.params.id
        newActivity.user = req.user
        newActivity.save((err, activity) => {
            res.json({success: true, message: "Activity created!", activity})
        })
    })

    .patch((req, res) => {
        Trip.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTrip) => {
            res.json(updatedTrip)
        })
    })

    .delete((req, res) => {
        Trip.findByIdAndRemove(req.params.id, (err, deletedTrip) => {
            res.json({success: true, message: `${deletedTrip.name} has been deleted.`})
        })
    })

tripsRouter.get('/:tripId/activities/:activityId', (req, res) => {
    Activity.findById(req.params.activityId, (err, activity) => {
        res.json(activity)
    })
}) 
    
module.exports = tripsRouter