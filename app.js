'use strict';

const express = require('express');
const app = express();

// Proxy handling
var proxy = require('http-proxy-middleware');
app.use('/mapproxy/service', proxy({target: 'https://mapservices.onemap.sg', changeOrigin: true}));

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Connected')
    .end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;