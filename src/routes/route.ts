import { Router } from "express";
import login from "../controllers/login";
import getBooks from "../controllers/getBooks";
import createBook from "../controllers/createBook";
import editBook from "../controllers/editBook";
import deleteBook from "../controllers/deleteBook";
import downloadBook from "../controllers/downloadBook";
import upload from "../middleware/uploadBook";

const route = Router();

route.post("/api/user/login", login);

route.get("/api/books", getBooks);

route.get("/api/books/:id/download", downloadBook);

route.get("/api/books/:id", getBooks);

route.post("/api/books", upload.single("file"), createBook);

route.put("/api/books/:id", editBook);

route.delete("/api/books/:id", deleteBook);

export default route;
