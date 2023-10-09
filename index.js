const express = require('express')
require('dotenv').config()
const port = process.env.PORT;
const connectToDb = require('./connection')
const route = require("./Router/route")

const app = express();
app.use(express.json())


app.use('/api' , route)
app.get('/', (req, res) => res.send('Hello World!'))

const startConnection =async ()=>{
    try{
        await connectToDb(process.env.MONGO_URL)
        app.listen(port , ()=>{
            console.log(`Server is live on port ${port}`);
        })
    }
    catch(err){
        console.log(err);
    }
}
startConnection()