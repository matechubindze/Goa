const express = require('express')

const app = express()

app.use((req, res) => {
    res.json([
        "hello",
        123,
        { name: "mate" },
        true,
        "server response"
    ])
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})