// 3
let n = 7
console.log(n % 2 === 0 ? "Even" : "Odd")

// 4
let a = 10
let b = 20
console.log(a > b ? a : b)

// 5
let age = 16
console.log(age >= 18 ? "Eligible" : "Not Eligible")

// 6
let score = 45
console.log(score >= 50 ? "Pass" : "Fail")

// 7
let x = 0
console.log(x > 0 ? "Positive" : x < 0 ? "Negative" : "Zero")

// 8
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let merged = [...arr1, ...arr2]
console.log(merged)

// 9
let person = {name:"Ana", age:20}
let copy = {...person, age:25}
console.log(person)
console.log(copy)

// 10
function sum(...nums) {
    return nums.reduce((a,b)=>a+b)
}
console.log(sum(1,2,3,4))

// 11
let obj = {a:1, b:2, c:3}
let {a:one, ...rest} = obj
console.log(one)
console.log(rest)

// 12
function greet(name) {
    console.log("Hello " + name)
}
greet("Mate")

// 13
const PI = 3.14
function area(r) {
  return PI * r * r
}
function circumference(r) {
  return 2 * PI * r
}

console.log(PI)
console.log(area(5))
console.log(circumference(5))
