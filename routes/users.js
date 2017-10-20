const
    express = require('express'),
    usersRouter = new express.Router(),
    User = require('../models/User.js'),
    Trip = require('../models/Trip.js'),
    usersController = require('../controllers/users.js')


usersRouter.get('/', usersController.index)
usersRouter.get('/signup', usersController.signupShow)
usersRouter.post('/signup', usersController.signupCreate)
usersRouter.get('/login', usersController.loginShow)
usersRouter.post('/login', usersController.loginCreate)
usersRouter.get('/profile', isLoggedIn, usersController.show)
usersRouter.patch('/profile', isLoggedIn, usersController.update)
usersRouter.post('/profile', isLoggedIn, usersController.create)
usersRouter.delete('/profile', isLoggedIn, usersController.delete)
usersRouter.get('/profile/edit', isLoggedIn, usersController.edit)
usersRouter.get('/logout', usersController.logout)

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next()
    res.redirect('/')
}

module.exports = usersRouter