const express = require('express')

const app = express()
const port = 3000

let items = ['one', 'two', 'three', 'four', 'five']

app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id)

    if (isNaN(id) || id < 0 || id >= items.length) {
        return res.status(400).json({ message: 'Invalid id' })
    }

    items.splice(id, 1)
    res.status(200).json(items)
    })

    app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})