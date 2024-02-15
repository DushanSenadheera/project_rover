require ('dotenv').config();

const express = require('express');
const { spawn } = require('child_process');
const app = express();

app.get('/', (req, res) => {
    const fnum = 4;
    const snum = 7;

    let dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['script.py', fnum, snum]);
    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend)
    });
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));