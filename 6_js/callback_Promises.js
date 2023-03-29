const fs = require('fs')

function readFilePromise(pathName, options){
    const promises = new Promise(function(resolve, reject){
        fs.readFile(pathName, options, function(error, data){
            if (error) {
                reject(error);
              } 
              else {
                resolve(data);
              }
        })
    })
    return promises
}

readFilePromise("./some.txt", "utf8")
.then(function(data){
    console.log("---data---", data)
})
.catch(function(error){
    console.log("--error---", error)
})