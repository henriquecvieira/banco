var database = require("./database")

database.where({nome: "stock car"}).update({nome: "wow"}).table("estudios").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})