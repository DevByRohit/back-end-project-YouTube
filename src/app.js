import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middleware to protect against unknown requests from untrusted sources
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);

// middleware to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(
  express.json({
    limit: "16kb",
  })
);

// middleware to handle urlencoded data
app.use(
  express.urlencoded({
    limit: "16kb",
    extended: true,
  })
);

// middleware to serve static files from the "public" directory and to parse cookies from incoming requests
app.use(express.static("public"));
app.use(cookieParser());

// import routes
// Actually I am exporting the default export from user.routes.js as "router" and then I am renaming it to "userRoutes" while importing it here in app.js. We can only do this when we are importing a default export, if it was a named export then we would have to import it with the same name as it was exported.
import userRoutes from "./routes/user.routes.js";

// use routes
app.use("/api/v1/users", userRoutes);

export { app };
