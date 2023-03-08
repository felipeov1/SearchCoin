const api = require('./build/config/api');
const express = require('express');

const server = express();

server.use(express.json());


server.listen(3000, () =>{
    console.log('Express started at http://localhost:3000')
})

server.get('/', async (req, res) => {
    try {
        const {data} = await api.get('/EUR-BRL')
        res.send({data})
        console.log((data))
    } catch (error) {
        res.send({error: error.message})
    }
});


