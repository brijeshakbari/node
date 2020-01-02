'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hellooo  Changed by Nupur-----Hello world today is last day of year \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
