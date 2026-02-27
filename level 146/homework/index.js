const express = require('express')
const readFile = require('./utils/readFile')

const app = express()
const PORT = 3000

app.get('/books', async (req, res) => {
    try {
        const books = await readFile()
        res.status(200).json(books)
    } catch {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

app.get('/books/:id', async (req, res) => {
    try {
        const books = await readFile()
        const id = Number(req.params.id)
        const book = books.find(b => b.id === id)

        if (!book) {
        return res.status(404).json({ error: 'Book not found' })
        }

        res.status(200).json(book)
    } catch {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})