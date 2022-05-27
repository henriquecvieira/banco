var database = require("./database");

async function testTransaction() {
  try {
    await database.transaction(async (trans) => {
        await database.insert({nome: "Anyone"}).table("estudios")
        await database.insert({nome: "Syd 01"}).table("estudios")
        await database.insert({nome: "Pyxerelia"}).table("estudios")
        await database.insert({nome: "Mojang"}).table("estudios")
        await database.insert({nome: "Gearbox"}).table("estudios")
       
    });
  } catch (err) {
    console.log();
  }
}
testTransaction()