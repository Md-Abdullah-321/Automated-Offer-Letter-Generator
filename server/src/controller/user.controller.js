const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
        return res.status(204).json({success: false ,  message: "Please, fill all the input field" });
    }

    const hasUser = await User.findOne({ email });

    if (hasUser) {
        return res.status(409).json({success: false , message: "User is already exist. Please, signin." });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    await User.create({ name, email, password: hashedPassword });

    return res.status(201).json({success: true , message: "User Created successfully" });
}


const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(204).json({success: false ,  message: "Please, fill all the input field" });
    }

    const hasUser = await User.findOne({ email });

    if (!hasUser) {
         return res.status(500).json({success: false ,  message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, hasUser.password)

    if (!isMatch) {
        return res.status(500).json({success: false ,  message: "Invalid Credentials" });
    }

    return res.status(200).json({success: true, message: "User logged in successfully."})
}

module.exports = {
    signup,
    signin
}