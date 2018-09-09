const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();
const express = require('express');
const app = express();

app.use(function(req, res, next) { // Enable cors
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const mySerial = new SerialPort('/dev/ttyUSB0', {
  baudRate: 9600
});

let temp = {}

mySerial.pipe(parser);

mySerial.on('open', function () {
  console.log('Opened Port.');
});

mySerial.on('data', function (data) {
  console.log(data.toString());
  const dataParsed = data.toString().split("/")
  temp = {temp: dataParsed[0], hum: dataParsed[1]}
});

mySerial.on('err', function (data) {
  console.log(err.message);
});

app.get('/', function (req, res) {
  res.send(temp);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
