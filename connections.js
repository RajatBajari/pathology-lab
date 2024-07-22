const mongoose=require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log(`Mongoose connected successfully`)
}).catch(err=>{
    console.log("something went wrong",err);
})