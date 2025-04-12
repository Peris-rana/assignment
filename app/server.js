import express from "express";
import connectDB from "./db.js";
import dotenv from "dotenv";

const app = express();

// load enviroment variables
dotenv.config();

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
