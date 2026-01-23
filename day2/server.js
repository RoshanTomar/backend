const express = require("express");

const app = express(); //server create hua app mein


app.get('/',(req,res)=>{
    res.send("Hello World!!")
})

app.listen(3001); //server start hua


