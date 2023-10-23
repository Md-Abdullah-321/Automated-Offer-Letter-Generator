const cors = require("cors");
const express = require("express");
const app = express();
require('dotenv').config();

app.use(cors({
    origin: "http://localhost:5173", // Update this with your actual frontend origin
    methods: ["POST", "GET", "DELETE", "PUT"],
}));

const mongoose = require("mongoose");
const userRouter = require("./src/routes/user.route.js");

app.get('/', (req, res, next) => {
  res.json("Hello World, How are you brother?");
});

app.use(express.json());
app.use('/api/user', userRouter);

app.listen(3000, () => {
    console.log('App is running on port 3000');
    mongoose
        .connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("Connected to MongoDB..."))
        .catch((err) => console.error("Could not connect to MongoDB...", err));
});
