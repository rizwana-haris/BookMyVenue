const User = require('../Models/userModel');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwt');

//register user
const registerUser = async (req,res) => { 
    try{

        const {name,email,password,phone} = req.body;

        if(!name||!email||!password||!phone){
            return res.status(400).json({message:"All fields are required"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,email,password: hashedPassword,phone,role: 'user'
        })

        const token = generateToken(user._id);

        return res.status(201).json({message:"User registered successfully",
            user:{
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },
            token
        })

    } catch(err) {
       if(err.code=== 11000){
        return res.status(400).json({message:"Email already exists"})
       }
    
     res.status(500).json({message: "Server error", error: err.message })
}}

module.exports = {
    registerUser
}