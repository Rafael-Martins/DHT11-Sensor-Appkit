# DHT11-Web
An software for arduino to read temp&humidity and send via serial for the node.js api thats fill the front-end made with vue

## To run

### Upload the main.cpp to your arduino and connect your DHT11 sensor on A1 pin

### Now run the api with the arduino connected on usb

```
go to js/api

npm install

node main.js
```

### Then run the web-server

```
go to js/web

npm install

npm run start
```
