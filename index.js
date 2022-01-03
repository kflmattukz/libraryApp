const express = require('express');
const app = express();
const router = require('./router')
const PORT = 3000;

app.use(router) // use router file


app.listen(PORT , ()=> {
    console.log(`Listening to http://localhost:${PORT}`)
})