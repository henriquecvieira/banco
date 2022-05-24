var database = require("./database")

database.where({name: "sid"}).update({name: "New Sid"}).table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})