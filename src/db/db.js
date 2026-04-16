import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// we always create a async function to connect the database because it takes some time while connecting to the database because the database situated in another continent.

const connectDB = async () => {
  // we always need to use try catch block to handle the error while connecting the database
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    // Logging the host of the connected database
    console.log(
      `Database connected successfully to ${connectionInstance.connection.host}`
    );
  } catch (error) {
    // logging the error while connecting to the database
    console.log("error connecting to the database", error);
    process.exit(1);
    /**
     * Here I have assignment to understand the process.exit(1).
     * we have multiple codes to exit the process so need to study them
     * I will be doing some research on this and will update the code accordingly.
    */
  }
};

export default connectDB;
