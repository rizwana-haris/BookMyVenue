const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");

//register user
const registerUser = async (req, res) => {
    
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const allowedRoles =["user","venue_owner"];
    if(!allowedRoles.includes(role)){
      return res.status(400).json({ message: "Invalid role" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const token = generateToken(user);

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: token,
    });

  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }

    res.status(500).json({ message: "Server error", error: err.message });
  }
};



//login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatching = await bcrypt.compare(password, user.password);

    if(!isMatching){
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);

    return res.status(200).json({
      message: "User login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: token,
    });

  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser
};
