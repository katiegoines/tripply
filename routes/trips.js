const
    express = require('express'),
    passport = require('passport'),
    tripsRouter = new express.Router(),
    Trip = require('../models/Trip.js'),
    Activity = require('../models/Activity.js'),
    tripsController = require('../controllers/trips.js')

tripsRouter.get('/', tripsController.index)
tripsRouter.get('/:id', tripsController.show)
tripsRouter.patch('/:id', tripsController.update)
tripsRouter.delete('/:id', tripsController.delete)
tripsRouter.get('/:id/edit', tripsController.edit)
tripsRouter.get('/:tripId/activities/:activityId', tripsController.showActivity)
tripsRouter.post('/:id/activity', tripsController.createActivity)
tripsRouter.patch('/:tripId/activities/:activityId', tripsController.updateActivity)
tripsRouter.delete('/:tripId/activities/:activityId', tripsController.deleteActivity)
    
module.exports = tripsRouter