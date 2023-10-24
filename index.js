const cors = require("cors");
const express = require("express");
const app = express();
const path = require('path');
require('dotenv').config();

app.use(cors({ origin: 'http://localhost:5173' }));


const mongoose = require("mongoose");
const userRouter = require("./src/routes/user.route.js");


app.use(express.json());
app.use('/api/user', userRouter);



//send client to server:
app.get('/', (req, res) => {
  app.use(express.static(path.resolve(__dirname, 'client', 'dist')));
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
})

app.listen(3000, () => {
    console.log('App is running on port 3000');
    mongoose
        .connect(process.env.DATABASE_URL || "mongodb+srv://abdullahdevit:suvidhafoundation@cluster0.qh8cf5f.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("Connected to MongoDB..."))
        .catch((err) => console.error("Could not connect to MongoDB...", err));
});
