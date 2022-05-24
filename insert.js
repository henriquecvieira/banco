var database = require("./database")

database.insert(
    {name: "sid",  price: 132.90 })
.into("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)    
})