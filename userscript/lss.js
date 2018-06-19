var io = require('socket.io')(80);

io.on('connection', function (socket) {
    console.log("incomming socket connection!");
    socket.on('message', function () {
        console.log("incomming message!");
    });
    socket.on('disconnect', function () {
        console.log("connection disconnected!");
    });
});
