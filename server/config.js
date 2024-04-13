const mongoose = require('mongoose');
require('dotenv').config();

const connectToDb = () => {
    mongoose.connect(process.env.DB).then(() => {
        console.log('Database connection is successful')
    }
    ).catch((err) => {
        console.log('Database connection failed' + err)
    });
}

module.exports = connectToDb;