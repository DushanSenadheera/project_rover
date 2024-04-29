const express = require('express');
const { spawn } = require('child_process');
const router = express.Router();

router.get('/api/location/', (req, res) => {

    const location = "Tangalle"
    const budget = "1000"
    const duration = "3"
    const catergories = "beaches"

    let dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['../model/src/location.py'], [location, catergories, budget, duration]);
    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = JSON.parse(data.toString());
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend); 
    });
})

module.exports = router;