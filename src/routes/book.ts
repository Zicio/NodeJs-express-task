import { Router } from "express";
import renderBooks from "../controllers/book/renderBooks";
import createBookRender from "../controllers/book/createBookRender";
import createBookRequest from "../controllers/book/createBookRequest";
import viewBook from "../controllers/book/viewBook";
import deleteBook from "../controllers/book/deleteBook";
import editBookRender from "../controllers/book/editBookRender";
import editBookRequest from "../controllers/book/editBookRequest";

const bookRouter = Router();

bookRouter.get("/", renderBooks);

bookRouter.get("/create", createBookRender);

bookRouter.post("/create", createBookRequest);

bookRouter.get("/:id", viewBook);

bookRouter.post("/delete/:id", deleteBook);

bookRouter.get("/update/:id", editBookRender);

bookRouter.post("/update/:id", editBookRequest);

export default bookRouter;
