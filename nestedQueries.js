var database = require("./database")

database.insert({name: "mists of moyah", price: 49}).into("games").then(data => {
    database.select().table(["id", "price"]).table("games").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })        
}).catch(err => {
    console.log(err)    
})