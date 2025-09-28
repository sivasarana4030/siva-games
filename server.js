const express = require('express');
const server = express();

server.all('/', (req, res) => {
    res.send('<h2>Server is Ready!</h2>');
});

function keepAlive() {
    server.listen(3000, () => { // You can change the port if needed
        console.log('Server Ready.');
    });
}

module.exports = keepAlive;