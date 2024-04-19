require('dotenv').config();

const connectToDB = require('./config.js');
const express = require('express')

const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const userInputs = require('./routes/userInputs.js');

app.use(cors({origin: '*',}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', userInputs);

//connectToDB()



app.listen(process.env.PORT, () => {
    console.log(`app is listening on port ${process.env.PORT}!`)
})

module.exports = app;