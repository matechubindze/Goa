const express = require("express")
const app = express()

let requestCount = 0

app.use((req, res, next) => {
    requestCount++
    console.log("Total requests:", requestCount)
    next()
});

app.get("/", (req, res) => {
    res.send("Hello")
});

app.listen(3000)