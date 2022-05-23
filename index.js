var database = require("./database")


// INSERT
// var dados = [
//     {
//     name: "Call of Duty of Thieves",
//     price: 90.01
//     },
//     {
//         name: "Minecraft",
//         price: 56.06
//     },
//     {
//         name: "resident evil",
//         price: 75.03
//     }
// ]

// database.insert(dados).into("games").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)    
// })

//SELECT
database.select().table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})