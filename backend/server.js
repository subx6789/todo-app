const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);
const connectDB = require("./config/db");
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
