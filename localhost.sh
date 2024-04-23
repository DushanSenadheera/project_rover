#!/bin/bash

# Navigate to the server directory and start the server in the background
cd server
npm start &

# Store the server's PID
server_pid=$!

# Navigate to the client directory and start the client
cd ../client
npm run dev

# Once the client has finished, kill the server
kill $server_pid