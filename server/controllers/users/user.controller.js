const userService = require('./user.service');

function authenticate(req, res, next) {
    userService.authenticate(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
}

function getAllUsers(req, res, next) {
    userService.getAllUsers()
    .then(users => res.json(users))
    .catch(err => next(err));
}

module.exports =  {
    authenticate,
    getAllUsers
};