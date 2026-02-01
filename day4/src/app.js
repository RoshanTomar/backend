
const express = require("express")
const app = express()
app.use(express.json())

const notes =[];

app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.send(req.body)
    console.log("note created successfully");
    console.log(req.body);;
    
})

app.get('/notes',(req,res)=>{
    res.send(notes)
})

app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index];
    res.send(`index ${req.params.index} deleted successfully`)
})

app.patch('/notes/:index',(req,res)=>{
    
    if(req.body.title && req.body.description){
        notes[req.params.index].title=req.body.title;
        notes[req.params.index].description=req.body.description;
        res.send(`index ${req.params.index} title & description updated successfully`)

    }
    
    else if(req.body.title){
        notes[req.params.index].title=req.body.title;
        res.send(`index ${req.params.index} title updated successfully`)
    }
   else if(req.body.description){
         notes[req.params.index].description=req.body.description;
        res.send(`index ${req.params.index} description updated successfully`) 
    }

})

module.exports=app;

