const express = require("express");
const cors = require("cors");
require("dotenv").config();

const chatRoutes = require("./routes/chatRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Taliro AI API");
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Taliro AI server is running!",
  });
});

app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
