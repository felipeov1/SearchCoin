const api = require('./api')
const router = require('express').Router();


router.get('/price', async (req, res) => {
    try {
        const {data} = await api.get('/EUR-BRL')
        res.send({data})
        // console.log((data))
    } catch (error) {
        res.send({error: error.message})
    }
});

module.exports = router