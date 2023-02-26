const axios = require("axios");

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json'
})


module.exports = api;






