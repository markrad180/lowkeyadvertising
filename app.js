var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
const app = express();
// var app2 = require('http').createServer(handler);
// var io = require('socket.io')(app2);


var index = require('./routes/index');

// const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var router = express.Router();
app.use(express.static(__dirname + '/public'));


app.use('/', index);

app.get('/', function(req, res, next){
  res.send('ok')
})

// function handler (req, res) {
//   io.sockets.on('connection', function (socket) {
//     setInterval(() => {
//       socket.emit("example-pong");
//     }, 1000);
//   });
// }




// app.get('/talktodevice', function(req, res, next){

  // io.sockets.on('connection', function (socket) {
  //
  //   socket.emit("example-pong");
  // // If we recieved a command from a client to start watering lets do so
  // // socket.on('example-ping', function(data) {
  // //       console.log("ping");
  // //       delay = data["duration"];
  // //       // Set a timer for when we should stop watering
  // //       setTimeout(function(){
  // //           socket.emit("example-pong");
  // //       }, delay*1000);
  // //   });
  //
  //
  // });

// })

app.listen(3000);

const pt = require('./lib/pts');


app.get('/savePoints', (req, res, next) => {
  res.send('good');
})

module.exports = app;
