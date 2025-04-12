import express from "express";
import connectDB from "./db.js";

const app = express();

// connection to the database
connectDB();
app.use(express.json());

// simple route
app.get("/", (req, res) => {
  res.send("node application");
});
app.listen("3000", () => {
  console.log("Server running on port 3000");
});
