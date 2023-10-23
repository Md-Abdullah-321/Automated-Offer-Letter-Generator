const cors = require("cors");
const express = require("express");
const app = express();


app.use(cors({
    origin: ["https://automated-offer-letter-generator.vercel.app/"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}))

app.get('/', (req, res, next) => {
    res.json("Hello World, How are you?");
})

app.listen(3000, () => {
    console.log('App is running on port 3000');
})