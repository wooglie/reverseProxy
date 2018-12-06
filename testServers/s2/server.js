const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.status(200).send("Hi from s2")
})

server.listen(1002, console.log("Running s2 on 1002."))