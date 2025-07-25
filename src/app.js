const express = require("express");
const {connectDB} = require("./config/database.js")
const app = express();
const User = require("./models/user")


app.post("/signup", async (req, res) => {
    const user = new User({
        firstName: "sathwik",
        lastName: "reddy",
        emailId: "sathwik@gmail.com",
        password:"sathwik123"
    });
    try {
        await user.save();
        res.send("Done")
    } catch (err) {
        res.status(400).send("error while saving user : " , err.message);
    }
});



connectDB()
    .then(() => {
        console.log("connection is successfull");
        app.listen(3000, () => {
        console.log("started successfullly");
    })})
    .catch((err) => {
    console.log("not connected");
});


