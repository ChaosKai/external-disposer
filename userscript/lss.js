const socket = io({
    autoConnect: false
});

socket.open();

socket.on('connection', function (client) {
    console.log("incomming socket connection!");
    client.on('message', function () {
        console.log("incomming message!");
    });
    client.on('disconnect', function () {
        console.log("connection disconnected!");
    });
});
