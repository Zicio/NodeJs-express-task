import { Router } from "express";
import renderBooks from "../controllers/books";
import createBookRender from "../controllers/createBookRender";
import createBookRequest from "../controllers/createBookRequest";
import viewBook from "../controllers/viewBook";
import deleteBook from "../controllers/deleteBook";
import editBookRender from "../controllers/editBookRender";
import editBookRequest from "../controllers/editBookRequest";

const bookRouter = Router();

bookRouter.get("/", renderBooks);

bookRouter.get("/create", createBookRender);

bookRouter.post("/create", createBookRequest);

bookRouter.get("/:id", viewBook);

bookRouter.post("/delete/:id", deleteBook);

bookRouter.get("/update/:id", editBookRender);

bookRouter.post("/update/:id", editBookRequest);

// bookRouter.post("/api/user/login", login);

// bookRouter.get("/api/books/:id/download", downloadBook);

// bookRouter.get("/api/books/:id", getBooks);

// bookRouter.put("/api/books/:id", editBookRender);

// bookRouter.delete("/api/books/:id", deleteBook);

export default bookRouter;
