import dotenv from "dotenv";
import connectDB from "./db/db.js";
import express from "express";
import { app } from "./app.js";

// configuring the path for dotenv file to use the environment variables from the .env file
dotenv.config({ path: "./.env" });

// Port number from the environment variables
const PORT = process.env.PORT || 8000;

// connecting the database after that starting the server
connectDB()
  .then(() => {
    // listening to the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
