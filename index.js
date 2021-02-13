const express = require('express');
const app = express();
const http = require('http').Server(app);

app.get('/', (req, res) => {
    res.send('root');
});

app.get('/test', (req, res) => {
    res.send('test');
});

const port = process.env.PORT || 5500;

http.listen(port);