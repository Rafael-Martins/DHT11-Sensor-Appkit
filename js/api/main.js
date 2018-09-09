const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

const mySerial = new SerialPort('/dev/ttyUSB0', {
  baudRate: 9600
});

mySerial.pipe(parser);

mySerial.on('open', function () {
  console.log('Opened Port.');
});

mySerial.on('data', function (data) {
  console.log(data)
  console.log(data.toString());
});

mySerial.on('err', function (data) {
  console.log(err.message);
});