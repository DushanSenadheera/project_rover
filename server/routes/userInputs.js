const express = require('express');
const { spawn } = require('child_process');
const router = express.Router();

router.get('/api/rover/', (req, res) => {

    // const {location, catergory, duration, budget} = req.body;
    // const data = {
    //     "location": location,
    //     "catergory": catergory,
    //     "duration": duration,
    //     "budget": budget
    // };

    const fnum = 5
    const snum = 6
    

    let dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['../model/src/main.py']);
    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        // dataToSend = JSON.parse(data.toString());
        dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend)
    });
})

module.exports = router;