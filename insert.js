var database = require("./database")

database.insert(dados).into("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)    
})