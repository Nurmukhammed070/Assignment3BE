const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin:12345@cluster0.qjsha7k.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api", taskRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});