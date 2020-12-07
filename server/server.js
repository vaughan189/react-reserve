if (!process.env.ALREADY_SET) { require('dotenv').config() }

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const jwt = require("./helpers/jwt");
const errorHandler = require('./helpers/error-handler');

const apiRouter = require('./routes');

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.use(jwt());

app.get("/", (req, res) => {
    res.json({ message: "Server Running on Port 4000"});
});

app.use(errorHandler);

app.use('/api', apiRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});