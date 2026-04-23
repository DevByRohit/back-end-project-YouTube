import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

// this is a industry standard way of defining routes in express.
router.route("/register").post(registerUser);

// this is another way of defining routes in express, but it is not recommended as it is not as clean and organized as the above method.
// router.post("/register", registerUser);

export default router;
