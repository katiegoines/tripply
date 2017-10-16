const
    express = require('express'),
    passport = require('passport'),
    usersRouter = new express.Router()
    User = require('..models/User.js')





usersRouter.route('/signup')
    .get((req, res) => {

    })
    .post((req, res) => {

    })

usersRouter.route('/login')
    .get((req, res) => {

    })
    .post((req, res) => {

    })

usersRouter.route('/profile')
    .get((req, res) => {

    })

usersRouter.route('/logout')
    .get((req, res) => {

    })


usersRouter.route('/:id')
    .patch((req, res) => {
        User.findById(req.params.id, (err, user) => {
            if(err) return console.log(err)
            user = Object.assign(user, req.body)
            user.save((err, updatedUser) => {
                if(err) return console.log(err)
                res.json({
                    success: true,
                    message: 'User Updated',
                    user: updatedUser 
             })
        })

    })

    .delete((req, res) => {
        User.findByIdAndRemove(req.params.id, (err, user) => {
            if(err) return console.log(err)
            res.json(user)
            })
        })
})
module.exports = usersRouter