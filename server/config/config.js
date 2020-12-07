require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        database: process.env.DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DIALECT,
        operatorsAliases: process.env.OPERATOR_ALIASES
    },
    stage: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        database: process.env.DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DIALECT,
        operatorsAliases: process.env.OPERATOR_ALIASES
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        database: process.env.DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DIALECT,
        operatorsAliases: process.env.OPERATOR_ALIASES,
        use_env_variable: 'DATABASE_URL'
    }
};