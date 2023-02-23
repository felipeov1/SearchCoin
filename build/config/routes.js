const express = require('express')
const routes = express.Router() 



let api = fetch(`https://economia.awesomeapi.com.br/last/USD`).then(res =>{ 
    return res.json()
}).then(body=>{ 
    console.log(body)
})

routes.get('/', (req, res) => {
    return res.json(api)
})


module.exports = routes;






