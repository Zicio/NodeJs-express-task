import { Router } from "express";
import login from "../controllers/login";
import getBooks from "../controllers/getBooks";
import createBook from "../controllers/createBook";
import editBook from "../controllers/editBook";
import deleteBook from "../controllers/deleteBook";

const router = Router();

router.post("/api/user/login", login);

router.get("/api/books", getBooks);

router.get("/api/books/:id", getBooks);

router.post("/api/books", createBook);

router.put("/api/books/:id", editBook);

router.delete("/api/books/:id", deleteBook);

export default router;
