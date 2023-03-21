import express from "express";


const app = express();


app.get('/hello',(req,res)=>{
    res.send('Hello World')
} )



app.listen(3333,()=>{
    console.log('http://localhost:3333')
})