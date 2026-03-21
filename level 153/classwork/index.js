const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(morgan("dev"))

const books = ["hary poter", "hobbit", "ted", "agent"]

app.get("/books", (req, res) => {
    res.status(200).json(books)
})

    app.get("/books/:name", (req, res) => {
    const book = books.find(b => b === req.params.name)

    if (!book) {
        return res.status(404).json("Book not found")
}

    res.status(200).json(book)
})

app.listen(3000)