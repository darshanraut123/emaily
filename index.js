const express = require("express");


const app = express();

app.get("/",(req,res)=>{
    res.send("Hi");
})

const PORT = process.env.POST || 5000;
c


