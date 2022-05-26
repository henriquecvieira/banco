var database = require("./database")

database.where({game_id: 11}).delete().table("estudios").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
    