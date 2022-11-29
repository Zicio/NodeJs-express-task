import express from "express";
import * as dotenv from "dotenv";
import router from "./routers/router";

dotenv.config({ path: __dirname + "/.env" });

const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
