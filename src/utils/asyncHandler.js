// This file defines a utility function called `asyncHandler` that is used to wrap asynchronous request handlers in an Express.js application. The purpose of this function is to catch any errors that may occur during the execution of the asynchronous handler and pass them to the next middleware in the Express.js error handling chain. This allows for cleaner and more concise code when dealing with asynchronous operations in Express.js routes.
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };


// this is a higher-order function that takes an asynchronous request handler as an argument and returns a new function that wraps the original handler in a Promise. If the original handler throws an error, it will be caught and passed to the next middleware in the Express.js error handling chain. This allows for cleaner and more concise code when dealing with asynchronous operations in Express.js routes.
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
