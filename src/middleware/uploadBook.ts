import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "src/data/books");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
    req.body.fileName = file.originalname;
  },
});

const upload = multer({ storage });

export default upload;
