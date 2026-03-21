const fs = require("fs")

function writeFile(path, data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2))//ვწერთ ფაილში
}

module.exports = writeFile