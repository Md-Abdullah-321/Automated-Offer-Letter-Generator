const express = require('express');
const { signup, signin } = require('../controller/user.controller');
const userRouter = express.Router();


userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.post("/test", (req, res) => {
    res.json("I am test route");
});


module.exports = userRouter;