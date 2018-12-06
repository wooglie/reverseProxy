const express = require('express')

const server = express()

server.get('/', (req, res) => {
    res.status(200).send("Hi from s1")
})

server.listen(1001, console.log("Running s1 on 1001."))