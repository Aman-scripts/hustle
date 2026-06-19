const express = require("express");
const app = express();
const port = 8088;

app.get("",(req,res)=>{
    res.send("Hello World! from backend")
})

app.get("/about",(req,res)=>{
    res.send("Hello World! from about page")
})

app.get("/contact",(res,req)=>{
    res.send("Hello World! from contact page")
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

