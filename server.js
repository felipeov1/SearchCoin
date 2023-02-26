const api = require('./build/config/api');
const express = require('express');

const server = express();

server.use(express.json());


server.listen(21262, () =>{
    console.log('Express started at http://localhost:21262')
})

server.get('/', async (req, res) => {
    try {
        const {data} = await api.get('/EUR-BRL')
        return res.send({data})
    } catch (error) {
        res.send({error: error.message})
    }
});


