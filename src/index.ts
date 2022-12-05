import express from "express";
import * as dotenv from "dotenv";
import bookRouter from "./routers/bookRouter";

dotenv.config({ path: __dirname + "/.env" });

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(bookRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
