var database = require("./database")

database.select("games.*", "estudios.nome as estudio_nome")
.table("games").innerJoin("estudios", "estudios.game_id", "games.id").where("games.id", 5).then(data => {
    var estudiosGAmeArray =  data;
    var game = {
        id: 0,
        name: "",
        estudios: []
    }
    game.id = data[0].id
    game.name = data[0].name
 
    data.forEach(estudio => {
        game.estudios.push({nome: estudio.estudio_nome})        
    });
    console.log(game);
}).catch(err => {
    console.log(err)    
})