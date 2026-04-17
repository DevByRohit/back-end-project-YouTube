/**
 * this is second approach to connect the database
 * we are creating a separate file for connecting the database and exporting the function to connect the database
 **/

// this is first way to import the dotenv by using the require method
// require("dotenv").config({path: "./.env"});

// this is second way to import the dotenv by using the import method
import dotenv from "dotenv";
import connectDB from "./db/db.js";

// configuring the path for dotenv file to use the environment variables from the .env file
dotenv.config({ path: "./.env" });

// connecting the database
connectDB();





/***
 * this is the first approach to connect the database and start the server
 * we are using the mongoose to connect the mongoDB database
 * we are using the express to create the server
 * we are using the IIFE function (Immediately Invoked Function Expression) to connect the database and start the server
 * we are using the environment variables to store the database connection string and the port number
***/

/**
    // import the mongoose for connecting the mongoDB database
    import mongoose from "mongoose";

    // import the db_name from constant file
    import { DB_NAME } from "./constants";

    // import the express
    import express from "express";

    const app = express();

    // connecting the database using the mongoose by using IIFE function (Immediately Invoked Function Expression)
    (async () => {
    try {
        // Connecting the database
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        // error listener for the database connection
        app.on("error", (error) => {
        console.log("error connecting to the database", error);
        throw error;
        });

        // listening to the server
        app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
    })();
*****/
