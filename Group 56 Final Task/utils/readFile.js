const fs = require("fs")

function readFile(path) {
    const data = fs.readFileSync(path, "utf8")//ვკითხულობთ ფაილს
    return JSON.parse(data)
}

module.exports = readFile