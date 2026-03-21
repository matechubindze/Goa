const readFile = require("../utils/readFile")//კიტხულობს json ფაილს
const writeFile = require("../utils/writeFile")//წერს json ფაილს

const path = "./data/games.json"//ფაილის ადგილი

exports.getGames = (req, res) => {
    const games = readFile(path)//ვკითხულობთ ფაილს 
    res.json(games)//ვაბრუნებთ პასუს
}

exports.getGameById = (req, res) => {
    const games = readFile(path)//ვკითხულობთ ფაილს 
    const game = games.find(g => g.id == req.params.id)//ვპოულობთ თამაშს

    if (!game) {
        return res.status(404).json({ message: "game not found" })//თუ არ მოიძებნა იქნება game not found 
    }

    res.json(game)//თუ მოიძებნა ვაბრუნებთ თამაშშს
}

    exports.createGame = (req, res) => {
    const games = readFile(path)//ვკითხულობთ ფაილს
    const newGame = req.body//ვაკეთებთ რექუესტს

    if (!newGame.name || !newGame.genre || !newGame.platform) {
        return res.status(400).json({ message: "missing required fields" })//თყ ველები ცარიელია იქნება ერორი
    }

    newGame.id = Date.now()//ვქმნით აიდს
    newGame.createdAt = new Date()

    games.push(newGame)//მასივში დამატება
    writeFile(path, games)//ფაილში შენახვა

    res.json(newGame)//რესპონსით თამაშის დაბრუნება
}

exports.updateGame = (req, res) => {
    const games = readFile(path)//ვკითხულობთ ფაილს
    const index = games.findIndex(g => g.id == req.params.id)//ვპოულობთ ინდექსს

    if (index === -1) {
        return res.status(404).json({ message: "game not found" })//თუ არ მოიძებნა რესპონსით ვაბრუნებთ "game not found"
    }

    games[index] = { ...games[index], ...req.body }//ვანახლებთ ძველ ინფორმაციას ახლით

    writeFile(path, games)//ვინახავთ ფაილში

    res.json(games[index])//ვაბრუნებთ ინდექსს
}

exports.deleteGame = (req, res) => {
    const games = readFile(path)//ვკითხულობთ ფაილს
    const newGames = games.filter(g => g.id != req.params.id)//ვშლით თამაშს ფილტერით

    writeFile(path, newGames)//ვინახავთ ფაილში

    res.json({ message: "game deleted" })//ვაკეთებთ რესპონსს "game deleted"
}