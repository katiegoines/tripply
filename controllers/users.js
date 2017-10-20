const
    passport = require('passport'),
    User = require('../models/User.js'),
    Trip = require('../models/Trip.js')

    module.exports = { 
        index: (req, res) => {
            User.find({}, (err, users) => {
                //res.json(users)
                res.redirect('/users/profile')
            })
        },

        loginShow: (req, res) => {
            res.render('login', {message: req.flash('loginMessage')})
        },

        loginCreate: passport.authenticate('local-login', {
            successRedirect: '/users/profile',
            failureRedirect: '/users/login'
        }),

        signupShow: (req, res) => {
            res.render('signup', {message: req.flash('signupMessage')})            
        },

        signupCreate: passport.authenticate('local-signup', {
            successRedirect: '/users/profile',
            failureRedirect: '/users/signup'
        }),

        show: (req, res) => {
            Trip.find({user: req.user._id}, (err, trips) => {
                var sortedTrips = trips.sort(function(a, b) {
                    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime() 
                })
                res.render('profile', {user: req.user, trips:sortedTrips})
            })
        },

        update: (req, res) => {
            // console.log(req.body)
            User.findByIdAndUpdate(req.user._id, req.body, {new:true}, (err, updatedUser) => {
                res.redirect('/users/profile')
            })
        },

        create: (req, res) => {
            newTrip = new Trip(req.body)
            newTrip.user = req.user._id
            //console.log(newTrip)
            newTrip.save((err, trip) => {
                res.redirect(`/trips/${trip._id}`)
            })
        },

        delete: (req, res) => {
            //console.log(req.user)
            User.findByIdAndRemove(req.user._id, (err, user) => {
                if (err) return console.log(err)
                req.logout()
                res.redirect('/')
            })
        },
        
        edit: (req, res) => {
            User.findById(req.user._id, (err, user) => {
                if(err) return console.log(err)
                console.log(req.user)
                res.render('../views/users/edit', {user:user})
            })
        },

        logout: (req, res) => {
            // destroy the session, redirect back home
            req.logout()
            res.redirect('/')
        },

    }

