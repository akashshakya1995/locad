const { createServer } = require("http")
const app = require('./app')
const { listen } = createServer(app)
const { dbConnect} = require("./dbConnection");
dbConnect().then(_ => { // Connection establishing of DB with dev or prod url.
  listen(8080, _ => console.log(`Server is Running at http://127:0.0.1:${8080}`));
})

