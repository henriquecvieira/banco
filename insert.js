var database = require("./database")

database.insert(
    {name: "Wow",  price: 120.90 })
.into("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)    
})