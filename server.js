const express = require('express')
const app = express()
const serveStatic = require('serve-static')

app.use(serveStatic(__dirname + "/dist"));


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));