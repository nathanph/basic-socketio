var app = require('./app')
var io = app.io
var info = require('debug')('websocket-node:info');

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    info(data);
  });
});
