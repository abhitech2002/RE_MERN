const fs = require("fs")

// console.log(fs)

fs.readFile("./dummy.text", function(error, data){
    console.log("Error:", error)
    console.log("Data:", data.toString())
})

console.log("\n")

// Async with error
fs.readFile("./dummy1.text", function(error, data){
    console.log("Error:", error)
    console.log("Data:", data.toString())
})

// SYNC
// const data = fs.readFileSync("./dummy.text")
// console.log("Sync Data:", data.toString())

console.log("\n")

// SYNC with error

const data = fs.readFileSync("./dummy1.text")
console.log("Sync Data:", data.toString())
