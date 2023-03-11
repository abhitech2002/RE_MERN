const fs = require("fs/promises")

let dataOne, dataTwo
fs.readFile("./dummy.text")
.then(function(data){
    console.log("data:", data)
    return data.toString()
})
// .then(function(result){
//     console.log("result:", result)
// })
.then(function(data1){
    dataOne = data1
    return fs.readFile("./random.txt")
})
.then(function(data2){
    dataTwo = data2.toString()
    console.log("data2:", dataTwo)

    console.log("Merged Data:", dataOne + dataTwo)
})
.catch(function(error){
    console.log("error:", error)
})