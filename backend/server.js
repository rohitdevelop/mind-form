 const dbconnect = require('./src/config/db')
 const dotenv = require('dotenv')
 dotenv.config()
const app = require("./src/app")
const port = 3000

dbconnect()


app.listen(port,()=>{
    console.log("app runing", port);
})