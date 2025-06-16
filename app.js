const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("hello nga jcoders")
})

app.get('/about',(req,res)=>{
    res.send("i like basketball")
})

app.listen(3000, ()=>{
    console.log("serveri po punon me rregull")
})

