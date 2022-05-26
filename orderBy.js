var database = require("./database")

database.select().table("games").orderBy("name", "asc")
    .then(data => {console.log(data)})
    .catch(erro=> {console.log(erro)})