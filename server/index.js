const cors = require("cors");
const express = require("express");
const app = express();
require('dotenv').config();

app.use(cors({
    origin: ["https://automated-offer-letter-generator.vercel.app/"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}))

const mongoose = require("mongoose");
const userRouter = require("./src/routes/user.route.js");


app.use(express.json());
app.use('/api/user', userRouter);
  
app.get('/', (req, res, next) => {
    res.json("Hello World, How are you?");
})

app.listen(3000, () => {
    console.log('App is running on port 3000');
    mongoose
        .connect(process.env.DATABASE_URL)
        .then(() => console.log("Connected to MongoDB..."))
        .catch((err) => console.error("Could not connect to MongoDB...", err));
})