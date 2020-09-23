const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 500;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log("Temos uma nova conexao")

    socket.on('disconnect', () => {
        console.log("Usuario saiu");
    })
})

server.listen(PORT, () => console.log(`Server has started. ${PORT}`));