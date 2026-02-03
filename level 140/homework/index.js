const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("custom", () => {
    console.log("event triggered");   
});

emitter.emit("custom");

emitter.on("withArgs", (msg, num) => {
    console.log(msg);
    console.log(num);
});

emitter.emit("withArgs", "hello", 5);

process.stdin.setEncoding("utf8");

process.stdin.on("data", data => {
    const text = data.trim().toUpperCase();
    console.log(text);
});

const buf1 = Buffer.alloc(10);
buf1.fill("A");
console.log(buf1);

const str = "Node";
const buf2 = Buffer.from(str);
console.log(buf2);

const buf3 = Buffer.from("Hello");
const decoded = buf3.toString();
console.log(decoded);

const buf4 = Buffer.from("Test");
buf4[0] = 74;
console.log(buf4.toString());
