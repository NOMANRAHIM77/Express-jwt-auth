const mongoose = require('mongoose')

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_STRING)
        console.log("database connected")
    }
    catch(err){
        console.log("error connecting db",err)
    }
}

module.exports = connectDB