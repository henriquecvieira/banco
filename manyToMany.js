var database = require("./database")

database.select([
"estudios.nome as game_nome"
]).table("games_estudios")
.innerJoin("games","games.id", "games_estudios.game_id" )
.innerJoin("estudios","estudios.id", "games_estudios.estudi_id" )
.where("games.id",6)
.then(data => {
   console.log(data)   
    }).catch(err => {
    console.log(err)    
})