require('dotenv').config();

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const foodRoute = require('./routes/foodRoute.js');
const stayRoute = require('./routes/stayRoute.js');
const locationRoute = require('./routes/locationRoute.js');

app.use(cors({origin: '*',}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', foodRoute)
app.use('/', stayRoute)
app.use('/', locationRoute)

app.listen(process.env.PORT, () => {
    console.log(`app is listening on port ${process.env.PORT}!`)
})

module.exports = app;