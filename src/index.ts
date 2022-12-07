import express from "express";
import * as dotenv from "dotenv";
import bookRouter from "./routes/book";
import indexRouter from "./routes/index";
import error from "./middleware/error";

dotenv.config({ path: __dirname + "/.env" });

const app = express();

app.use(express.urlencoded());
app.set("views", __dirname);
app.set("view engine", "ejs");
app.use(express.json());
app.use("/", indexRouter);
app.use("/book", bookRouter);
app.use(error);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
