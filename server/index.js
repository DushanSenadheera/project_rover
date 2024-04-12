require('dotenv').config();
import config from './config';

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const userInputs = require('./routes/userInputs');

app.use(cors({origin: '*',}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/rover', userInputs); 

config.connectToDB()

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
})