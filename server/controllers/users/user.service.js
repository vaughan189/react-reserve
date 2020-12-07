const jwt = require('jsonwebtoken');
const db = require("../../models");

async function authenticate({ username, password }) {
    const user = await db.user.findAll({ where: { email: username}})
    if (user[0].dataValues && user[0].dataValues.password === password) {
        const token = jwt.sign({ sub: user.id }, process.env.JWT_KEY);
        const { password, ...userWithoutPassword } = user[0].dataValues;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

async function getAllUsers() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

module.exports = {
    authenticate,
    getAllUsers
};