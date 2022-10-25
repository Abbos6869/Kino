const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const port = 3030

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log("bo'lar endi")
})