var database = require("./database")

database.select([
"estudios.nome as estudi_nome",
"games.name as game_name",
"games.price as game_price"

]).table("games_estudios")
.innerJoin("games","games.id", "games_estudios.game_id" )
.innerJoin("estudios","estudios.id", "games_estudios.estudi_id" )
.then(data => {
   console.log(data)   
    }).catch(err => {
    console.log(err)    
})