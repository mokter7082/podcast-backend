const mongoose = require('mongoose');
const { mongoUrl } = require("../secret");

const dbConnect = async(option={}) =>{
   try {
    await mongoose.connect(mongoUrl,option)
    console.log("Dastabase Connection Established")

    mongoose.connection.on("error",(error)=>{
        console.error("db connection error",error)
    })
   } catch (error) {
    console.log("error",error)
   }
}

module.exports = dbConnect