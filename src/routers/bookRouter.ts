import { Router } from "express";
import login from "../controllers/login";
import getBooks from "../controllers/getBooks";
import createBook from "../controllers/createBook";
import editBook from "../controllers/editBook";
import deleteBook from "../controllers/deleteBook";
import downloadBook from "../controllers/downloadBook";
import upload from "../middleware/uploadBook";

const bookRouter = Router();

bookRouter.post("/api/user/login", login);

bookRouter.get("/api/books", getBooks);

bookRouter.get("/api/books/:id/download", downloadBook);

bookRouter.get("/api/books/:id", getBooks);

bookRouter.post("/api/books", upload.single("file"), createBook);

bookRouter.put("/api/books/:id", editBook);

bookRouter.delete("/api/books/:id", deleteBook);

export default bookRouter;
