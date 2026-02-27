const fs = require("fs/promises");

async function readJson() {
    const data = await fs.readFile("data.json", "utf-8");
    console.log(data);
}

readJson();
