var database = require("./database")

database.where({name: "minecraft" }).table("games").then( data =>{
    console.log(data)
}).catch(err => {
    console.log(err)
})