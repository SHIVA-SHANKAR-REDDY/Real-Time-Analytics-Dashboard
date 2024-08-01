// backend/app.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const DataModel = require('./models/DataModel');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect('mongodb://localhost:27017/analytics', { useNewUrlParser: true, useUnifiedTopology: true });

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Endpoint to receive data from Python script
app.post('/data', async (req, res) => {
  const newData = new DataModel(req.body);
  await newData.save();
  io.emit('data', req.body);
  res.status(200).send('Data received');
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
});
