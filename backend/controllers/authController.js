const User = require("../models/User");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({
      name,
      email,
      password
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found !",
      });
    } else {
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid Credentials !",
        });
      } else {
        const token = jwt.sign(
          {
            id: user._id,
          },
          process.env.JWT_PASSWORD
        );
        res.json({
          token,
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
module.exports = { registerUser, loginUser };
