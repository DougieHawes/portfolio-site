// environment variables
require("dotenv").config();

// import dependencies
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

// variables
const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

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

// connect mongoose
mongoose
  .connect(mongoUri)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));
