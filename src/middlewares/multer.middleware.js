import multer from "multer";

// Multer configuration for handling file uploads. In this configuration, we are using disk storage to store the uploaded files in a temporary directory called "public/temp". The filename of the uploaded file will be the same as the original name of the file. You can customize the storage configuration as per your requirements, such as changing the destination directory or modifying the filename format. For more information about multer and its configuration options, you can refer to the official documentation.
// cb stands for callback function which is used to specify the destination and filename for the uploaded file. The first argument of the callback function is an error object (if any error occurs) and the second argument is the destination path or filename. In this case, we are passing null as the first argument to indicate that there is no error and we are passing the desired destination path and filename as the second argument.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },

  filename: function (req, file, cb) {
    // the file object contains information about the uploaded file, such as the original name, encoding, mimetype, etc. Here we are using the original name of the file as the filename for storing it in the temporary directory. You can modify this logic to generate a unique filename or to include additional information in the filename if needed.
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
});
