const express = require("express")  //import-ს ვუკეთებთ express-ს
const app = express()

const gamesRoutes = require("./routes/gamesRoutes") //ვაიმპორტებთ Route ფაილს

const PORT = 3000 //სერვერი არის 3000 პორტზე

app.use(express.json())//კითხულობს ფაილს json ში

app.use("/api", gamesRoutes)

app.listen(PORT, () => {
    console.log("server running on port" + PORT)
})
//სერვერი იწყებს მუშაობას და კონსოლში იწერება "server running on port 3000"