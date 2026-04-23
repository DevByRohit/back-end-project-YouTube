import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler((req, res) => {
  res.status(200).json({ success: true, message: "User fetched successfully" });
});

export { registerUser };
