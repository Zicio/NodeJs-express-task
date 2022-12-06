import { Router } from "express";
import login from "../controllers/login";
import getBooks from "../controllers/render/books";
import createBook from "../controllers/render/createBook";
import editBook from "../controllers/editBook";
import deleteBook from "../controllers/deleteBook";
import upload from "../middleware/uploadBook";
import createBookRender from "../controllers/render/createBook";
import renderBooks from "../controllers/render/books";
import createBookRequest from "../controllers/request/createBook";

const bookRouter = Router();

bookRouter.get("/", renderBooks);

bookRouter.get("/create", createBookRender);

bookRouter.post("/create", createBookRequest);

// bookRouter.post("/api/user/login", login);


// bookRouter.get("/api/books/:id/download", downloadBook);

// bookRouter.get("/api/books/:id", getBooks);



// bookRouter.put("/api/books/:id", editBook);

// bookRouter.delete("/api/books/:id", deleteBook);

export default bookRouter;
