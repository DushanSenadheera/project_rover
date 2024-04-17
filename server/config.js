const mongoose = require('mongoose');
require('dotenv').config();

const connectToDb = (res) => {
    mongoose.connect(process.env.DB).then(() => {
        console.log('Database connection is successful')
        res.sendStatus(200);
    }
    ).catch((err) => {
        console.log('Database connection failed' + err)
    });
}

module.exports = connectToDb;