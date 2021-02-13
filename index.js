const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static('public'));

const port = process.env.PORT || 5500;

http.listen(port);