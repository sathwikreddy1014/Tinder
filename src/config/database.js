const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://sathwik1014:Y58WbIOvjTkkE1pu@cluster0.lv1lsus.mongodb.net/Tinder"
    );
};

module.exports = {
    connectDB
}

