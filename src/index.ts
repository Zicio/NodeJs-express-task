import express from "express";
import * as dotenv from "dotenv";
import bookRouter from "./routes/book";
import indexRouter from "./routes/index";
import error from "./middleware/error";
import path from "path";
import * as mongoose from "mongoose";

dotenv.config({ path: path.join(__dirname, "../config/.env") });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("views", __dirname);
app.set("view engine", "ejs");
app.use(express.json());
app.use("/", indexRouter);
app.use("/book", bookRouter);
app.use(error);

const PORT = process.env.PORT || 4000;
const UrlDB = process.env.URLDB || "localhost";
(async () => {
  try {
    await mongoose.connect(UrlDB);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}...`);
    });
  } catch (e) {
    console.log(e);
  }
})();
