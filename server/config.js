require('dotenv').config();
const mongoose = require('mongoose');

module.exports = {
    connectToDB: () => {
        mongoose.connect(process.env.DB)
            .then(() => console.log('Connected!'));
    }
}
