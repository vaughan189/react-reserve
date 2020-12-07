const expressJwt = require('express-jwt');

module.exports = jwt;

function jwt() {
    const secret = process.env.JWT_KEY;
    return expressJwt({ secret }).unless({path: ['/api/users/authenticate']});
}