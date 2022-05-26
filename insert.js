var database = require("./database")

database.insert(
    {nome: "batman", game_id: 6})
.table("estudios").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)    
})