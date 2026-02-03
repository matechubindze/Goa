const fs = require("fs");
const { readFile } = require("fs/promises");
const readline = require("readline");

async function readText() {
    const data = await readFile("text.txt", "utf8");
    console.log(data);
}

async function readJson() {
    const data = await readFile("data.json", "utf8");
    const obj = JSON.parse(data);
    console.log(obj.name);
}

readText();
readJson();

const rl = readline.createInterface({
    input: fs.createReadStream("large.txt")
});

rl.on("line", line => {
    console.log(line);
});

const writeStream = fs.createWriteStream("output.txt");

process.stdin.setEncoding("utf8");

process.stdin.on("data", data => {
    writeStream.write(data);
});

process.stdin.on("end", () => {
    writeStream.end();
});
