const mongoose = require('mongoose');

const connectToDb = (url)=> mongoose.connect(url)
.then(()=>console.log('connected to mongodb....'))
.catch(()=> console.log(err))

module.exports = connectToDb