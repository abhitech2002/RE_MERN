const { error } = require("console")
const express = require("express")
const fs = require("fs/promises")

const app = express() // Initialization

// Extra function to read the data from data.json file
function readAllData(){
    return fs.readFile("data.json", "utf-8")
    .then(function(data){
        return JSON.parse(data.toString()) // parse the data in string format
    })
}

app.use(express.json())

app.get("/users", function(req, res){
    readAllData()
    .then(function(data){
        res.send(data) // prebuilt function of express send()
    })
    .catch(function(error){
        res.send("User not created.")
    })
})

app.post("/users", function(req, res){
    const newUser = req.body
    readAllData()
    .then(function(data){
        data.push(newUser)
        return fs.writeFile("data.json", JSON.stringify(data))
    })
    .then(function(){
        res.send("User Created Successfully")
    })
    .catch(function(error){
        res.send("User not created.")
    })
})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})