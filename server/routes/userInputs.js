const express = require('express');
const { spawn } = require('child_process');
const router = express.Router();

router.post('/api/rover/', (req, res) => {

    const {
        fnum,
        snum
    } = req.body;

    let dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['../model/recommendation system.ipynb', fnum, snum]);
    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = JSON.parse(data.toString());
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend.test)
    });
})