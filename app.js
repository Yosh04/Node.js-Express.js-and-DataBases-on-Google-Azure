const express=require('express')
const app=express()
const port=3000 
var especie = require('./routes/especie'); //Consume los archivos de routes. 

app.get('/',(req,res)=>{
    res.send('Hello World proyecto juan!')
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})

app.get('/info',(req,res)=>{
    res.send('Acá la información!')
})

app.use('/especie', especie); //Arranca el proyecto desde este punto. 
