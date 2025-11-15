const square = require("./square");
const isEven = require("./isEven");

const num = Math.floor(Math.random() * 10);
const squared = square(num);
console.log(isEven(squared));