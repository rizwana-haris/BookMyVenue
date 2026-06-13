const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");
const asyncHandler = require("express-async-handler");
const StatusCode = require("../statusCode");

//register user
const registerUser = asyncHandler(async (req, res) => {

  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: "All fields are required" });
  }
  const existingUser = await User.findOne({ email })
  if (existingUser)
    return res.status(StatusCode.BAD_REQUEST).json({ message: "Email already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role
  });

  const token = generateToken(user._id);

  return res.status(StatusCode.CREATED).json({
    message: "User registered successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token: token,
  });
  res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: "Server error", });

})

//login user
const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body;
  console.log(req.body)
  if (!email || !password) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: "All fields are required" });
  }

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(StatusCode.NOT_FOUND).json({ message: "Invalid credentials" });
  }

  const isMatching = await bcrypt.compare(password, user.password);

  if (!isMatching) {
    return res.status(StatusCode.NOT_FOUND).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user._id);

  return res.status(StatusCode.OK).json({
    message: "User login successful",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token: token,
  });
  return res
    .status(StatusCode.INTERNAL_SERVER_ERROR)
    .json({ message: "Server error", });

})

module.exports = {
  registerUser,
  loginUser
};
