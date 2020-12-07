const jwt = require('jsonwebtoken');

// TODO: Move this to database
const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];


async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id }, process.env.JWT_KEY);
        const { password, ...userWithoutPassword } = user;
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