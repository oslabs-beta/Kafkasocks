// var app = require('./app');
var server = require('http').createServer();
var os = require('os-utils');
// var PORT = process.env.PORT || 5050;
var io = require('socket.io')(server, {
    transports: ['websocket', 'polling']
});
var tick = 0;
// 1. listen for socket connections
io.on('connection', function (client) {
    setInterval(function () {
        // 2. every second, emit a 'cpu' event to user
        os.cpuUsage(function (cpuPercent) {
            client.emit('cpu', {
                name: tick++,
                value: cpuPercent
            });
        });
    }, 1000);
});
// app.listen(PORT, function () {
//     console.log("Server listening on port " + PORT);
// });
server.listen(3333);
