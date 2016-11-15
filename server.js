/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

//Server

const express = require("express");
const http = require("http");
const engine = require("socket.io");

const port = 3000;

const app = express();

let data = [
  {id: 1, author: "Cosa uno", text: "comentario"},
  {id: 2, author: "Cosa dos", text: "comentario"}
];

let server = http.createServer(app).listen(port, () => {
  console.log("El servidor esta escuchando en ${port}")
});

const io = engine.listen(server);

io.on("connection", (socket) => {
  socket.on("read", () => {
    io.emit("data", data)
  });

  socket.on("sign", () => {
    data.unshift(sign);
    io.emit("data", data)
  });
});
//

new WebpackDevServer(webpack(config), config.devServer).listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');
  open('http://localhost:' + config.port + '/webpack-dev-server/');
});
