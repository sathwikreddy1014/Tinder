const express = require("express");
const app = express();

app.use( "/hello",(req, res) => {
    res.send("hello frm server")
})

app.listen(3000, () => {
    console.log("started successfullly");
})