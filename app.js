const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/school-project-backend",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

const app = express();

app.listen(4000, () => {
    console.log("Server has started");
})