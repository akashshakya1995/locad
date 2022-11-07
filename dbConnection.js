const { MongoClient } = require("mongodb")
const dbConnect = async function () {
    try {
        const client = new MongoClient("mongodb+srv://locad:<password>@cluster0.xpe48nu.mongodb.net/?retryWrites=true&w=majority")
        const db = ""
        client.connect(function (err, data) {
            if (err) {
                console.log("Db not established")
            } else {
                console.log("db connection established successfully")
                db = data.db("dbName")
            }
        })
    } catch (error) {
        console.log("==== DB Connection Error ====", error.message);
        throw error;
    }
};


module.exports = { db, dbConnect }



module.exports = { dbConnect };