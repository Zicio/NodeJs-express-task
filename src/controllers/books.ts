import { Request, Response } from "express";
import library from "../data/library";

const renderBooks = async (req: Request, res: Response) => {
  res.render("views/book/index", {
    title: "Books",
    books: library,
  });
};

export default renderBooks;
