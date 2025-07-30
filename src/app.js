const express = require("express");
const {connectDB} = require("./config/database.js")
const app = express();
const User = require("./models/user")


//signup api
app.use(express.json())
app.post("/signup", async (req, res) => {
    // console.log(req.body);
    const user = new User(req.body);
    try {
        await user.save();
        res.send("Done")
    } catch (err) {
        res.status(400).send("error while saving user : " + err.message);
    }
});

//user
app.get("/user", async (req, res) => {
    const useremail = req.body.emailId;
    try {
        // const users = await User.findOne({emailId: useremail});
        const users = await User.findOne({});
        if (!users) {
            res.status(404).send("incorrect email or no user with this email id");
        } else {
            res.send(users);
        };
    } catch (error) {
        res.status(400).send("something went wrong")
    };
});


//feed api 
app.get("/feed" , async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch ( err ) {
        res.status(401).send("something went wrong")
    }
});

//delete
app.delete("/delete", async (req, res) => {
    const userId = req.body.userId;
     try {
        const users = await User.findByIdAndDelete(userId)
        res.send("user deleted sucessfuluy");
    } catch ( err ) {
        res.status(401).send("something went wrong")
    }
})
//update
app.patch("/update", async (req, res) => {
    const emailId = req.body.email;
    const data = req.body
    console.log(data);
     try {
        const users = await User.findOneAndUpdate({emailId : emailId},data)
        console.log(users);
        
        res.send("Data Updated sucessfuluy");
    } catch ( err ) {
        res.status(401).send("something went wrong")
    }
})

connectDB().then(() => {
        console.log("connection is successfull");
        app.listen(3000, () => {
        console.log("started successfullly");
    })})
    .catch((err) => {
    console.log("not connected");
});


