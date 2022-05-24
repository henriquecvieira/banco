var database = require("./database")

// database.where({name: "minecraft" }).table("games").then( data =>{
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

// var query = database.select(["id", "price"])
//     .where({name: "Minecraft"})
//     .orWhere({id: 2})
//     .whereRaw("price > 50")
//     .table("games")
// console.log(query.toQuery())

//não é bom utilizar vários wheres juntos


// database.select(["id", "price"])
//     .whereRaw("name = 'Minecraft' OR price < 50")
//     .table("games").then( data =>{
//         console.log(data)
//     }).catch(err => {
//         console.log(err)
//     })