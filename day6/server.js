
const app = require('./src/app')
const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://roshantomar9713_db_user:LZGKV45yIFKEaThS@cluster0.s8kcy9d.mongodb.net/day6")
    .then(()=>{
        console.log("connected to DataBase");
    })
}
connectToDb();

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})

