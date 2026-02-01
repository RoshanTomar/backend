
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello World there !!")
})

app.get('/home',(req,res)=>{
    res.send("This is Home Page")
})

app.listen(3000,()=>{
    console.log("server started at port 3000");
})

