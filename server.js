const { createServer } = require("http")
const app = require('./app')
const { listen } = createServer(app)
const { dbConnect} = require("./dbConnection");
const port = process.env.PORT || 8080; 
dbConnect().then(_ => { // Connection establishing of DB with dev or prod url.
  listen(port, _ => console.log(`Server is Running at http://127:0.0.1:${port}`));
})

