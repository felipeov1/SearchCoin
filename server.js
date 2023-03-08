const express = require('express');
const server = express();

server.use('/', require('./build/config/routes'));
server.use(express.json());

server.listen(3000, () =>{
    console.log('Express started at http://localhost:3000')
})









