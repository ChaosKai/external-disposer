var socket = io('http://localhost/');


socket.on('connect', function () {
    socket.send('hi');
    console.log("connection established");

    socket.on('message', function (msg) {
        // my msg
    });
});
