const express = require("express")//ვაიმპორტებთ express-ს
const router = express.Router()//ვქმნით რაუტერს

const games = require("../controllers/gamesController")//კონტროლერის იმპორტი

router.get("/games", games.getGames)//თამაშის მიღება
router.get("/games/:id", games.getGameById)//ერთი თამაშის მიღება აიდით
router.post("/games", games.createGame)//თამაშის დამატება
router.put("/games/:id", games.updateGame)//თამაშის განახლება
router.delete("/games/:id", games.deleteGame)//თამაშის წაშლა

module.exports = router //დაექსპორტებაა