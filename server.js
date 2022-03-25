// import dependencies
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// variables
const port = process.env.PORT || 5000;

// connect mongoose
const connectDB = require("./config/db");

connectDB();

// initialise express
const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, console.log(`express app running on PORT:${port}`));

app.use("/auth", require("./routes/authRoute"));
app.use("/blog", require("./routes/blogRoute"));
app.use("/mail", require("./routes/mailRoute"));
app.use("/profile", require("./routes/profileRoute"));
app.use("/skills", require("./routes/skillsRoute"));
app.use("/work", require("./routes/workRoute"));

// server static assets in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
