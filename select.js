SELECT
database.select().table(["id", "price"]).table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
